<?php
// Database
$settings = array(
  'driver'    => 'mysql',
  'host'      => 'server',
  'database'  => 'crud_primeng_php',
  'username'  => 'username',
  'password'  => 'password',
  'charset'   => 'utf8',
  'collation' => 'utf8_unicode_ci',
  'prefix'    => ''
);

use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;
$capsule->addConnection( $settings );
$capsule->bootEloquent();