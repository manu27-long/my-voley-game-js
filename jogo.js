module.exports = class Jogo{
    constructor(data, hora, local, juiz){
        this.data = data;
        this.hora = hora;
        this.local = local;
        this.juiz = juiz;
        this.sets = [];
        
    }

    info(){
        console.log('o jogo acontece em '+ this.data + ' as ' + this.hora + ' no local '+ this.local+' juiz do jogo ' + this.juiz);
    }
}