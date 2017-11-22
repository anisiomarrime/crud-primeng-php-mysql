<?php

# === Controller para Usuarios
# ==================================================
require_once _APP . "/models/usuario.php"; // Importando o modelo
# ==================================================

# ==================================================
# Todos Usuário
$app->get('/usuario/', function() use ($app) {
    # Leitura
    $usuarios = Usuario::all();

    # Retorna o JSON do resultado
    return json_encode($usuarios);
});

# ==================================================
# Busca pelo ID
$app->get('/usuario/{id}/', function($request, $response, $args) {
  $id      = $args['id'];
  $usuario = Usuario::find($id);
  
  if($usuario != null) $response->getBody()->write($usuario->toJson());

  return $response;
});

# ======================================================
# Novo Usuário
$app->post('/usuario/', function($request, $response, $args) {
  # Captura os dados da requisição
  $data = $request->getParsedBody();

  $usuario = new Usuario();
  $usuario->nome  = $data['nome'];
  $usuario->email = $data['email'];
  $usuario->senha = md5($data['senha']);
  $usuario->save();

  # Retorna o JSON do objecto persistido
  return $response->withStatus(201)->getBody()->write($usuario->toJson());
});

# =====================================================
# Actualiza Usuário
$app->put('/usuario/{id}/', function($request, $response, $args) {
  $id   = $args['id'];
  $data = $request->getParsedBody();

  $usuario = Usuario::find($id);
  $usuario->nome  = $data['nome'] ? : $usuario->nome;
  $usuario->email = $data['email'] ? : $usuario->email;
  $usuario->senha = $data['senha'] ? md5($data['senha']) : $usuario->senha;
  $usuario->save();

  return $response->getBody()->write($usuario->toJson());
});

# ======================================================
# Remove Usuário
$app->delete('/usuario/{id}/', function($request, $response, $args) {
  $id      = $args['id'];
  $usuario = Usuario::find($id);
  $usuario->delete();

  return $response->withStatus(200);
});