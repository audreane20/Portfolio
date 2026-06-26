<?php

declare(strict_types=1);

$config = require __DIR__ . DIRECTORY_SEPARATOR . 'bootstrap.php';

header('Content-Type: application/json; charset=UTF-8');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.',
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
    $payload = $_POST;
}

$lang = (($payload['lang'] ?? 'en') === 'fr') ? 'fr' : 'en';

$messages = [
    'en' => [
        'missing' => 'Please fill in your name, email, and message.',
        'invalid_email' => 'Please enter a valid email address.',
        'missing_token' => 'Please complete the Google reCAPTCHA verification.',
        'recaptcha_unavailable' => 'Google reCAPTCHA is not configured yet on the server.',
        'recaptcha_failed' => 'Google reCAPTCHA verification failed. Please try again.',
        'brevo_unavailable' => 'Brevo is not configured yet on the server.',
        'mail_failed' => 'Verification succeeded, but the email could not be sent from the server.',
        'success' => 'Your message was sent successfully.',
        'server_error' => 'An unexpected server error occurred.',
    ],
    'fr' => [
        'missing' => 'Veuillez remplir votre nom, votre courriel et votre message.',
        'invalid_email' => 'Veuillez entrer une adresse courriel valide.',
        'missing_token' => 'Veuillez completer la verification Google reCAPTCHA.',
        'recaptcha_unavailable' => 'Google reCAPTCHA n est pas encore configure sur le serveur.',
        'recaptcha_failed' => 'La verification Google reCAPTCHA a echoue. Veuillez reessayer.',
        'brevo_unavailable' => 'Brevo n est pas encore configure sur le serveur.',
        'mail_failed' => 'La verification a reussi, mais le courriel n a pas pu etre envoye depuis le serveur.',
        'success' => 'Votre message a ete envoye avec succes.',
        'server_error' => 'Une erreur serveur inattendue est survenue.',
    ],
];

$t = $messages[$lang];

$name = trim((string) ($payload['name'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));
$honeypot = trim((string) ($payload['honeypot'] ?? ''));
$recaptchaToken = trim((string) ($payload['recaptchaToken'] ?? ''));

if ($honeypot !== '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Submission blocked.',
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $t['missing'],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $t['invalid_email'],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$recaptchaEnabled = (bool) ($config['recaptcha']['enabled'] ?? false);
$recaptchaSecret = trim((string) ($config['recaptcha']['secret_key'] ?? ''));

if (!$recaptchaEnabled || $recaptchaSecret === '') {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'message' => $t['recaptcha_unavailable'],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($recaptchaToken === '') {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $t['missing_token'],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$remoteIp = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
$verificationResponse = verifyRecaptcha($recaptchaSecret, $recaptchaToken, $remoteIp);

if (!($verificationResponse['success'] ?? false)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $t['recaptcha_failed'],
        'errors' => $verificationResponse['error-codes'] ?? [],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

$contactEmail = trim((string) ($config['contact']['email'] ?? ''));
$deliveryMode = (string) ($config['contact']['delivery'] ?? 'brevo');
$senderEmail = trim((string) ($config['contact']['sender_email'] ?? $contactEmail));
$senderName = trim((string) ($config['contact']['sender_name'] ?? 'Portfolio Contact'));
$siteLabel = trim((string) ($config['contact']['site_label'] ?? 'Portfolio'));

$subject = ($lang === 'fr')
    ? sprintf('[%s] Nouveau message de %s', $siteLabel, $name)
    : sprintf('[%s] New message from %s', $siteLabel, $name);

$body = ($lang === 'fr')
    ? "Site: {$siteLabel}\nLangue: Français\nNom: {$name}\nCourriel: {$email}\n\nMessage:\n{$message}\n"
    : "Site: {$siteLabel}\nLanguage: English\nName: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";

if ($deliveryMode === 'brevo') {
    $brevoApiKey = trim((string) ($config['brevo']['api_key'] ?? ''));

    if ($brevoApiKey === '') {
        http_response_code(503);
        echo json_encode([
            'success' => false,
            'message' => $t['brevo_unavailable'],
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $brevoResult = sendViaBrevo(
        $brevoApiKey,
        $senderEmail,
        $senderName,
        $contactEmail,
        $subject,
        $body,
        $email,
        $name
    );

    if (!($brevoResult['success'] ?? false)) {
        logContactAttempt([
            'channel' => 'brevo',
            'success' => false,
            'from_email' => $email,
            'from_name' => $name,
            'to_email' => $contactEmail,
            'subject' => $subject,
            'result' => $brevoResult,
        ]);

        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => buildBrevoErrorMessage($t['mail_failed'], $brevoResult),
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    logContactAttempt([
        'channel' => 'brevo',
        'success' => true,
        'from_email' => $email,
        'from_name' => $name,
        'to_email' => $contactEmail,
        'subject' => $subject,
        'result' => $brevoResult,
    ]);

    echo json_encode([
        'success' => true,
        'message' => $t['success'],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($deliveryMode === 'php_mail') {
    $headers = [
        'From: ' . $senderEmail,
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8',
    ];

    $mailSent = @mail($contactEmail, $subject, $body, implode("\r\n", $headers));

    if (!$mailSent) {
        logContactAttempt([
            'channel' => 'php_mail',
            'success' => false,
            'from_email' => $email,
            'from_name' => $name,
            'to_email' => $contactEmail,
            'subject' => $subject,
        ]);

        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => $t['mail_failed'],
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    logContactAttempt([
        'channel' => 'php_mail',
        'success' => true,
        'from_email' => $email,
        'from_name' => $name,
        'to_email' => $contactEmail,
        'subject' => $subject,
    ]);

    echo json_encode([
        'success' => true,
        'message' => $t['success'],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

http_response_code(500);
echo json_encode([
    'success' => false,
    'message' => $t['server_error'],
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

function verifyRecaptcha(string $secret, string $token, string $remoteIp): array
{
    $postFields = http_build_query([
        'secret' => $secret,
        'response' => $token,
        'remoteip' => $remoteIp,
    ]);

    $options = [
        'http' => [
            'method' => 'POST',
            'header' => implode("\r\n", [
                'Content-Type: application/x-www-form-urlencoded',
                'Content-Length: ' . strlen($postFields),
            ]),
            'content' => $postFields,
            'timeout' => 10,
        ],
    ];

    $context = stream_context_create($options);
    $result = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);

    if ($result === false) {
        return ['success' => false];
    }

    $decoded = json_decode($result, true);

    return is_array($decoded) ? $decoded : ['success' => false];
}

function sendViaBrevo(
    string $apiKey,
    string $senderEmail,
    string $senderName,
    string $recipientEmail,
    string $subject,
    string $body,
    string $replyToEmail,
    string $replyToName
): array {
    $safeBody = htmlspecialchars($body, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $htmlBody = '<html><body><pre style="font-family: Arial, sans-serif; white-space: pre-wrap;">'
        . nl2br($safeBody)
        . '</pre></body></html>';

    $payload = json_encode([
        'sender' => [
            'email' => $senderEmail,
            'name' => $senderName,
        ],
        'to' => [
            [
                'email' => $recipientEmail,
                'name' => $senderName,
            ],
        ],
        'replyTo' => [
            'email' => $replyToEmail,
            'name' => $replyToName,
        ],
        'subject' => $subject,
        'htmlContent' => $htmlBody,
        'textContent' => $body,
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    if ($payload === false) {
        return [
            'success' => false,
            'reason' => 'payload_encoding_failed',
        ];
    }

    $options = [
        'http' => [
            'method' => 'POST',
            'header' => implode("\r\n", [
                'Accept: application/json',
                'Content-Type: application/json',
                'api-key: ' . $apiKey,
                'Content-Length: ' . strlen($payload),
            ]),
            'content' => $payload,
            'timeout' => 15,
            'ignore_errors' => true,
        ],
    ];

    $context = stream_context_create($options);
    $result = @file_get_contents('https://api.brevo.com/v3/smtp/email', false, $context);

    if ($result === false || !isset($http_response_header) || !is_array($http_response_header)) {
        return [
            'success' => false,
            'reason' => 'request_failed',
        ];
    }

    $statusCode = null;

    foreach ($http_response_header as $header) {
        if (preg_match('/^HTTP\/\S+\s+(\d{3})/', $header, $matches) === 1) {
            $statusCode = (int) $matches[1];
            break;
        }
    }

    $decoded = json_decode($result, true);

    if ($statusCode !== null && $statusCode >= 200 && $statusCode < 300) {
        return [
            'success' => true,
            'status' => $statusCode,
            'response' => $decoded,
        ];
    }

    return [
        'success' => false,
        'status' => $statusCode,
        'response' => is_array($decoded) ? $decoded : null,
        'raw' => $result,
    ];
}

function buildBrevoErrorMessage(string $fallback, array $brevoResult): string
{
    $response = $brevoResult['response'] ?? null;

    if (is_array($response)) {
        if (!empty($response['message']) && is_string($response['message'])) {
            return $fallback . ' Brevo: ' . $response['message'];
        }

        if (!empty($response['code']) && is_string($response['code'])) {
            return $fallback . ' Brevo code: ' . $response['code'];
        }
    }

    if (!empty($brevoResult['status'])) {
        return $fallback . ' HTTP ' . $brevoResult['status'] . '.';
    }

    return $fallback;
}

function logContactAttempt(array $data): void
{
    $logPath = __DIR__ . DIRECTORY_SEPARATOR . 'contact-delivery.log';
    $entry = [
        'timestamp' => gmdate('c'),
        'ip' => (string) ($_SERVER['REMOTE_ADDR'] ?? ''),
        'user_agent' => (string) ($_SERVER['HTTP_USER_AGENT'] ?? ''),
    ] + $data;

    $encoded = json_encode($entry, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    if ($encoded === false) {
        return;
    }

    @file_put_contents($logPath, $encoded . PHP_EOL, FILE_APPEND | LOCK_EX);
}
