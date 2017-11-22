import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuario/classe/usuario';

@Injectable()
export class UsuarioService {

  // URL da API
  private url = 'http://YOUR-API-HOST/api/usuario/';

  constructor(private http: HttpClient) {}

  // Retorna todos usuários
  todos(){
    return this.http.get<Usuario[]>(this.url);
  }

  // Salva usuário
  salvar(usuario){
    // Cria novo usuário
    if(usuario.id > 0) return this.http.put(this.url + usuario.id + '/', usuario).subscribe();
    // Edita o usuário
    else return this.http.post(this.url,usuario).subscribe();
  }

  // Remove usuario
  remover(usuario){
    return this.http.delete(this.url + usuario.id + '/').subscribe();
  }
}
