import leia from 'readline-sync'
import { Celular, cadastraCelular } from './repository/CelularRepository'
import { Pessoa } from './repository/PessoaRepository'

var cor = leia.question("INFORME A COR DO CELULAR: ")
var marca = leia.question("INFORME A MARCA DO CELULAR: ")
var tamamnho = leia.questionFloat("INFORME QUAL O TAMANHO DO CELULAR: ")

var celular: Celular = {

    tamanhoTela: tamamnho,
    marca: marca,
    cor: cor,
    
}

cadastraCelular(celular);



var nome = leia.question("DIGITE O NOME: ");
var cpf = leia.question("DIGITE O CPF: ");
var dtNascimento = leia.question("DIGITE A DATA DE NASCIMENTO: ");
var telefone = leia.question("DIGITE UM TELEFONE: ");
var email = leia.question("DIGITE UM EMAIL: ");

const pessoa: Pessoa = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dtNascimento,
    contatos:{
        telefones:[telefone],
        emails:[email]

    },
celular:celular
}
console.log(pessoa);