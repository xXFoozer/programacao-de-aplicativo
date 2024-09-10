import Veiculo from "./Veiculo";

export default class Moto extends Veiculo{
    private cilindradas : number;

    constructor(marca: string, modelo:string, ano: number, valor: number, disponivel: boolean, historico: string[], cilindradas: number ){
        super(marca,modelo,ano,valor,disponivel,historico)
        
        this.cilindradas = cilindradas

    }

}