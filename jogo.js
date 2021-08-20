
module.exports = class Jogo{
    constructor(data, hora, local, juiz){
        this.data = data;
        this.hora = hora;
        this.local = local;
        this.juiz = juiz;
        this.sets = [];
        
    }

    getData(){
        return this.data;
}
   setData(data){
         this.data = data
}}