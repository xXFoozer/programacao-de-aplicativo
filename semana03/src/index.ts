import leia from 'readline-sync'
import Banco from "./Banco";

var nubank = new Banco();

var opcao = 0;
do{
    console.log("-------------MENU-----------------")
    opcao = leia.keyInSelect(["CRIAR CONTA","TRANSFERECIA","REMOVER CONTA","MOSTRAR CONTAS"])+1
    switch(opcao){
        case 1:
            nubank.addAcout();
            break;
        case 2:
            nubank.transferir();
            break;
        case 3: 
            nubank.removerConta();
            break;
        case 4: 
            nubank.mostrarContas();
            break;
    }
}while(opcao !==0);