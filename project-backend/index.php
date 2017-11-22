<?php
/***
** Author: Anísio Marrime
** API PARA => CRUD Com Angular 4, PrimeNG e PhP + MySQL
** 22 - 11 - 2017
** Slim Framework 3 && Eloquete 5.4
*/

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

# === constantes
# ==================================================
define("_APP", 'app');

# === Carregando as dependencias
# ==================================================
require 'vendor/autoload.php';

$configuration = [
    'settings' => [
        'displayErrorDetails' => true,
    ],    
];   
$c   = new \Slim\Container($configuration);
$app = new \Slim\App($c);

# === arquivo de config
# ==================================================
require_once _APP . '/config/database.php';

# === handlers para tratamento de excecoes
# ==================================================
require_once _APP . '/handlers/exceptions.php';

# === Usuarios
# ==================================================
require_once _APP . "/controllers/usuarios.php";

# === iniciando o slim
$app->run();