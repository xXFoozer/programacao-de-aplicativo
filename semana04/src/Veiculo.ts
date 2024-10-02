export default class Veiculo {
    constructor(marca: string, modelo:string, ano: number, valor: number, disponivel: boolean, historico: string[] ){
        this.marca= marca
        this.modelo = modelo
        this.ano = ano
        this.valor = valor
        this.disponivel = disponivel
        this.historicoTransferencia = historico

    }

    private marca: string;
    private modelo: string;
    private ano: number;
    private valor: number;
    private disponivel: boolean;
    private historicoTransferencia: string[]



    detalhesVeiculos(){}

    registrarTransacao(){

    }
}