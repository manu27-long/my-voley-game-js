const Ponto = require('./ponto');

module.exports = class Set{
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
        
          this.ponto.push(ponto);
      }
}