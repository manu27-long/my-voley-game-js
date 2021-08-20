const Ponto = require('./ponto');

module.exports = class Set{
    constructor(){
       this.pontosCasa = 0;
       this.pontosAdevesario = 0;
       this.pontos = [];
    }  
      getMaiorPontuador(){
         return this.jogador;
         
      } 

      getListaPorPontosPorTipos(){         
          return this.ponto;
 
      }
   
      registrarPonto(ponto){
         
          this.ponto.push(ponto);
      
          
  }
}