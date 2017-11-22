export class Usuario {
    id: Number;
    nome: String;
    email: String;
    senha: String;

    constructor(usuario:any) {
        if(usuario != null){
            this.id    = usuario.id;
            this.nome  = usuario.nome;
            this.email = usuario.email;
        }
    }
}
