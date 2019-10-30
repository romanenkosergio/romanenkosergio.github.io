<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd536f887aa00371796109dc9b3a3124b
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PayParts\\' => 9,
        ),
        'A' => 
        array (
            'AmoCRM\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PayParts\\' => 
        array (
            0 => __DIR__ . '/..' . '/privatbank/payparts/src',
        ),
        'AmoCRM\\' => 
        array (
            0 => __DIR__ . '/..' . '/dotzero/amocrm/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'PayParts' => 
            array (
                0 => __DIR__ . '/..' . '/privatbank/payparts/src',
            ),
        ),
    );

    public static $fallbackDirsPsr0 = array (
        0 => __DIR__ . '/..' . '/privatbank/payparts/src',
    );

    public static $classMap = array (
        'PayParts\\PayParts' => __DIR__ . '/..' . '/privatbank/payparts/src/PayParts/PayParts.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd536f887aa00371796109dc9b3a3124b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd536f887aa00371796109dc9b3a3124b::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitd536f887aa00371796109dc9b3a3124b::$prefixesPsr0;
            $loader->fallbackDirsPsr0 = ComposerStaticInitd536f887aa00371796109dc9b3a3124b::$fallbackDirsPsr0;
            $loader->classMap = ComposerStaticInitd536f887aa00371796109dc9b3a3124b::$classMap;

        }, null, ClassLoader::class);
    }
}