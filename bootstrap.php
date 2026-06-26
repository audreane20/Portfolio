<?php

declare(strict_types=1);

$defaultConfig = [
    'contact' => [
        'email' => 'audreane20@yahoo.com',
        'delivery' => 'mailto',
    ],
    'recaptcha' => [
        'enabled' => false,
        'site_key' => '',
        'secret_key' => '',
    ],
];

$localConfigPath = __DIR__ . DIRECTORY_SEPARATOR . 'config.php';

if (is_file($localConfigPath)) {
    $localConfig = require $localConfigPath;

    if (is_array($localConfig)) {
        $defaultConfig = array_replace_recursive($defaultConfig, $localConfig);
    }
}

return $defaultConfig;
