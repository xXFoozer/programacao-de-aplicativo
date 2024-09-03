import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import ContaCorrente from './ContaCorrente';

var nome = leia.question("DIGITE SEU NOME: ")
var cpf = leia.question("DIGITE SEU CPF: ")
var chavePix = leia.question("CHAVE PIX: ")

var t1 = new Titular(nome,cpf)
var c1 = new ContaBancaria(t1,chavePix);

var cc = new ContaCorrente(t1,chavePix);
cc.getLimite();


c1.getNumero();
c1.setNumero("24753");

c1.consultarSaldo()
c1.depositar(40000)
c1.sacar(40)
c1.mostrarDadosConta()

