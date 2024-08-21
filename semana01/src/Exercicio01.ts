import leia from 'readline-sync';

var idades: number[]= [];
var nomes: string[]= [];

var nomeNova: string;
var idadeNova: number;

var nomeVelha: string;
var idadeVelha: number;

function pedirInfoUsuario(qtd: number){
    for(var i =0; i < qtd ; i++){
        var nome = leia.question("INFORME O NOME: ");
        nomes.push(nome);
        var idade = leia.questionInt("INFORME A IDADE: ");
        idades.push(idade);
    }
}

function pessoaMaisNova(){
    for(var i=0; i < idades.length; i++){
        if(idadeNova === undefined || idades[i] < idadeNova){
            idadeNova = idades[i]
            nomeNova = nomes[i]
        }
    }
    console.log(`A PESSOA MAIS NOVA É ${nomeNova} COM ${idadeNova} ANOS.\n`)
}

function pessoaMaisVelha(){
    idades.forEach((idade, index)=> {
        if(!idadeVelha|| idade > idadeVelha){
            idadeVelha = idade
            nomeVelha = nomes[index]
        }
    })
    console.log(`A PESSOA MAIS VELHA É ${nomeVelha} COM ${idadeVelha} ANOS.\n`)
}

pedirInfoUsuario(5);
pessoaMaisNova();
pessoaMaisVelha();

// var nome: string = "Germano";

// console.log(nome);

// function somar(valorUm: number, valorDois: number ){
//     return valorUm + valorDois
// }
// somar(1, 3)