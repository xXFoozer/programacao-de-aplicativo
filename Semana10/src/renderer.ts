import Veiculo from './entity/Veiculo';
import './index.css';

var listaVeiculos:Veiculo[] = [];

document.getElementById("botao-cadastrar")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();
  

   var modelo = document.getElementById("modelo") as HTMLInputElement;
   var cor = document.getElementById("cor") as HTMLInputElement;
   var ano = document.getElementById("ano") as HTMLInputElement;
   var preco = document.getElementById("preco") as HTMLInputElement;
   var placa = document.getElementById("placa") as HTMLInputElement;
   var imagem = document.getElementById("imagem") as HTMLInputElement;


   const novoVeiculo = new Veiculo(modelo.value,cor.value, Number(ano.value),Number(preco.value), placa.value,imagem.value)

   listaVeiculos.push(novoVeiculo);
   (window as any).bancoAPI.createVeiculo(novoVeiculo);


   const lista_campos = ["modelo","cor","ano","preco","placa","imagem"];
   lista_campos.forEach((campos)=> (document.getElementById(campos)as HTMLInputElement).value = "")

   var aside = document.getElementById("lista-veiculo");
   aside.innerHTML = "";

   for(var i=0; i <listaVeiculos.length; i++){
        aside.innerHTML += `
        <div class="card">
                <img src="${listaVeiculos[i].getImagem()}" alt="ERRO">
                <div class="dados">
                  <strong>${listaVeiculos[i].getModelo()}</strong>
                  <span>Cor:${listaVeiculos[i].getCor()}</span>
                  <span>Ano:${listaVeiculos[i].getAno()}</span>
                  <span>Preço:${listaVeiculos[i].getPreco()}</span>
                  <span>Placa:${listaVeiculos[i].getPlaca()}</span>
             </div>
             <div class="botao-card">
                <button id="botao-ver">VER</button>
                <button id="botao-deletar">DELETAR</button>
             </div>
        </div>
        `
   }

})


window.onload = async () => {
    const veiculos = await (window as any).bancoAPI.findAll();
    for(var i =0 ; i < veiculos.length ; i++){
          const veiculo = new Veiculo (veiculos[i].modelo, veiculos[i].cor, veiculos[i].ano,veiculos[i].preco,veiculos[i].placa,veiculos[i].imagem,veiculos[i].id)
          listaVeiculos.push(veiculo)
          var aside = document.getElementById("lista-veiculo");
          aside.innerHTML = "";
     }
     for(var i=0; i <listaVeiculos.length; i++){
          aside.innerHTML += `
          <div class="card">
                  <img src="${listaVeiculos[i].getImagem()}" alt="ERRO">
                  <div class="dados">
                    <strong>${listaVeiculos[i].getModelo()}</strong>
                    <span>Cor:${listaVeiculos[i].getCor()}</span>
                    <span>Ano:${listaVeiculos[i].getAno()}</span>
                    <span>Preço:${listaVeiculos[i].getPreco()}</span>
                    <span>Placa:${listaVeiculos[i].getPlaca()}</span>
               </div>
               <div class="botao-card">
                  <button id="botao-ver">VER</button>
                  <button id="botao-deletar">DELETAR</button>
               </div>
          </div>
          `
     }
    
}