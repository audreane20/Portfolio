<?php

declare(strict_types=1);

return [
    'contact' => [
        'email' => 'audreane20@yahoo.com',
        'sender_email' => 'audreane20@yahoo.com',
        'sender_name' => 'Audreane Deschenes',
        'site_label' => 'Audreane Deschenes Portfolio',

        // Options: 'brevo' or 'php_mail'
        'delivery' => 'brevo',
    ],
    'recaptcha' => [
        'enabled' => true,
        'site_key' => 'PASTE_YOUR_GOOGLE_RECAPTCHA_SITE_KEY_HERE',
        'secret_key' => 'PASTE_YOUR_GOOGLE_RECAPTCHA_SECRET_KEY_HERE',
    ],
    'brevo' => [
        'api_key' => 'PASTE_YOUR_BREVO_API_KEY_HERE',
    ],
];
