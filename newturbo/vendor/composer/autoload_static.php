<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd536f887aa00371796109dc9b3a3124b
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'AmoCRM\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'AmoCRM\\' => 
        array (
            0 => __DIR__ . '/..' . '/dotzero/amocrm/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd536f887aa00371796109dc9b3a3124b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd536f887aa00371796109dc9b3a3124b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
