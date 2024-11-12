import{v4 as uuid }from 'uuid';


export default class Ususario{
    private id: string
    private name: string
    private email: string
    private password: string
    private data_nacimento:Date
    private criado_em:Date
    private atualizado_em:Date


    constructor(name:string, email: string, password: string, data_nascimento: Date){
        this.id = uuid()
        this.name= name;
        this.email= email;
        this.data_nacimento= data_nascimento;
        this.criado_em= new Date();
        this.atualizado_em = new Date();
       this.password = password;
    }


    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getEmail(){
        return this.email
    }
    public getPassword(){
        return this.password
    }
    public getData_nascimento(){
        return this.data_nacimento
    }
    public getCriado_em(){
        return this.criado_em
    }
    public getAtualizado_em(){
        return this.atualizado_em
    }
}