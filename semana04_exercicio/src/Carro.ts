import Veiculo from "./Veiculo";

export default class Carro extends Veiculo{
    private numeroPortas: number

    constructor(marca: string, modelo:string, ano: number, valor: number, disponivel: boolean, historico: string[],numeroPotas:number ){
        super(marca,modelo,ano,valor,disponivel,historico)

        this.numeroPortas = numeroPotas
    }





    detalhesVeiculos(){


    }
}