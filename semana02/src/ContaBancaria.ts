import Titular from "./Titular";

export default class ContaBancaria {
    constructor(titular: Titular , chavePix: string){
        this.titular = titular;
        this.chavePix = chavePix;
        this.dataCriacao = new Date();
        this.saldo = 0;
        this.numero = String(Math.floor(Math.random()*89999)+ 10000)
    }

    numero: string;
    saldo: number;
    titular: Titular;
    chavePix: string;
    dataCriacao: Date;

    mostrarDadosConta(){
        console.log("-----DADOS CONTA-----")
        console.log(`Nome titular ${this.titular.nome}` )
        console.log(`CPF titular ${this.titular.cpf}` )
        console.log(`Chave Pix ${this.chavePix}` )
        console.log(`Numero da Conta: ${this.numero}` )
        console.log(`Data Criação: ${this.dataCriacao}` )
        console.log(`SALDO ATUAL: ${this.saldo.toFixed(2)}` )
    }

    depositar(valor: number) {
        if(valor <= 0){
            console.log("Valor do deposito é invalido!!!");
        }else{
            this.saldo += valor;
            console.log(`Deposito de R$:${valor} realizado com sucesso.O saldo atual é ${this.saldo}`);
        }
    }
    
    sacar(valor: number){
        if(valor > this.saldo || valor <= 0){
            console.log("Saldo insuficiente para saque!!!! ");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$:${valor} realizado com sucesso.O saldo atual é ${this.saldo}`);
    }

    consultarSaldo(){
        console.log(`Seu saldo é de R$:${this.saldo}`)
    }

}