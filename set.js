const Ponto = require('./ponto');
const Jogador = require('./jogador');
module.exportes = class Set{
    constructor(){
       this.pontosCasa = 0;
       this.pontosAdevesario = 0;
       this.pontos = [];
    }  
      getMaiorPontuador(){
         return this.novoJogador;
      } 

      getListaPorPontosPorTipos(){
         return this.pontos;
      }
   
      registrarPonto(ponto){
        if(ponto.getMaiorPontuador() > this.pontosCasa.getMaiorPontuador()){
          this.ponto.push(ponto);
      }}
}