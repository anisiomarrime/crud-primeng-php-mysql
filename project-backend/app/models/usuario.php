<?php

use \Illuminate\Database\Eloquent\Model;

// Modelo
class Usuario extends Model {
     
    protected $table    = "usuarios"; // Nome da tabela
    protected $fillable = ["nome","senha","email"]; // Campos existentes
}
 
?>