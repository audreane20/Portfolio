<?php

declare(strict_types=1);

$config = require __DIR__ . DIRECTORY_SEPARATOR . 'bootstrap.php';

header('Content-Type: application/json; charset=UTF-8');

echo json_encode([
    'recaptchaEnabled' => (bool) ($config['recaptcha']['enabled'] ?? false),
    'recaptchaSiteKey' => (string) ($config['recaptcha']['site_key'] ?? ''),
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
