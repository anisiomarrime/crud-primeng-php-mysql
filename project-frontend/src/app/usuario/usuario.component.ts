import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../usuario/classe/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  isDialogVisible : boolean = false; // Variavel que controla o estado de uma dialog

  mensagens : Message[] = []; // Mensagens para o growl

  usuario  = new Usuario(null); // Instância do usuário

  usuarios : Usuario[]; // Arrays de usuario

  constructor(private usuarioService : UsuarioService,private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.consultar();
  }

  // Consulta usuário
  consultar(){
    this.usuarioService.todos().subscribe((data) => this.usuarios = data);
  }

  actualizaTabela(){
    this.consultar();
    this.consultar();
  }

  // Salva usuário
  salvar() {
    this.usuarioService.salvar(this.usuario);
    this.actualizaTabela(); // Actualiza a tabela
    this.isDialogVisible = false;
    this.addMensagem('success','Usuário','Salvo com sucesso.');
  }

  // Remove usuário
  remover(usuario){
    this.usuarioService.remover(usuario);
    this.actualizaTabela(); // Actualiza a tabela
    this.addMensagem('success','Usuário','Removido com sucesso.');
  }

  // Edita usuário a partir do evento (onEdit) da p:dataTable
  editarPelaTabela(event){
    this.usuario = event.data;
    this.salvar();
  }

  // O primeiro parametro define o tipo de severidade: success, warning, error...
  // O segundo é a mensagem a ser exibida
  addMensagem(sevedidade,titulo, mensagem) {
    this.limpaMensagens();
    this.mensagens.push({severity: sevedidade, summary:titulo, detail: mensagem});
  }

  // Limpa as mensagens
  limpaMensagens() {
    this.mensagens = [];
  }

  confirmarRemocao(usuario:any){
    this.confirmationService.confirm({
      message : "Tem certeza que deseja remover " + usuario.nome + "?",
      accept: () => {
        this.remover(usuario);
      }
    });
  }

  // Mostra o dialog com o formulário
  mostraDialog(data:any) {
    if(data != null){
      this.usuario = new Usuario(data); // Instância o usuário com valores
    }else{
      this.usuario = new Usuario(null); // Instância do novo usuário
    }
    this.isDialogVisible = true; // Mostra a Dialog
  }
}
