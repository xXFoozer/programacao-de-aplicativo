import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import Titular from './Titular';
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';

export default class Banco {
    private contas: ContaBancaria[]= [];

    public transferir(){


        var numeroContaOrigem = leia.question("DIGITE O NUMERO DA SUA CONTA: ")
        var indexOrigem;
        for (var i =0 ; i <this.contas.length; i++){
            if(this.contas[i].getNumero()=== numeroContaOrigem){
                indexOrigem = i;
            }    
        }

        if(indexOrigem === undefined){
            console.log("A CONTA QUE VOCE DIGITOU NÃO EXISTE...")
            return;
        }
        
        var numeroContaDestino = leia.question("INFORME A CONTA DESTINO: ")
        var indexDestino = this.contas.findIndex(conta => conta.getNumero() === numeroContaDestino);

        if (indexDestino === -1 ){
            console.log("A CONTA DE DESTINO NÃO EXISTE...")
            return;
        }

        var valor = leia.questionFloat("informe o valor da transferencia: ")

        if(valor> this.contas[indexOrigem].getSaldo()){
            console.log("VOCE NAO TEM SALDO SUFICIENTE");
            return;
        }

        this.contas[indexOrigem].sacar(valor);
        this.contas[indexDestino].depositar(valor);
        console.log("TRANSFERENCIA FEITA COM SUCESSO");

    }


    public mostrarContas(){
        console.table(this.contas)
    }

    private save(conta: ContaBancaria){
        this.contas.push(conta);
        console.log(`Conta com numero: ${conta.getNumero()} foi criada com sucesso!`)
    }

    public addAcout(){
        console.log("----------------CRIANDO CONTA-------------------")
        var nome = leia.question("DIGITE SEU NOME: ")
        var cpf = leia.question("DIGITE SEU CPF: ")
        var chavePix = leia.question("CHAVE PIX: ")
        var tipoConta = leia.keyInSelect(["CORRENTE","POPANCA"])+1

        var titular = new Titular(nome,cpf);

        var conta: ContaBancaria;
        if(tipoConta === 1){
            conta = new ContaCorrente(titular,chavePix);
        }else {
            conta = new ContaPoupanca(titular,chavePix);
        }
        this.save(conta);
    }        
    public removerConta(){
        console.log("--------DELETAR CONTA----------")
        var numeroConta= leia.question("DIGITE A CONTA A SER DELETADA: ")


        for(var i =0; i < this.contas.length; i++){
            if(numeroConta === this.contas[i].getNumero()){
                this.contas.splice(i,1);
                console.log( `CONTA COM O N°${numeroConta} EXCLUIDA COM SUCESSO`)
                return;
            }
        }

        console.log(`NÃO FOI ENCONTRADO NENHUMA CONTA COM O NÚMERO ${numeroConta}`)




     // Encotre a conta (numero)
     // Rmovo do array   
    }

}