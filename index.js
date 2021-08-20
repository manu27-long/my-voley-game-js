const Jogo = require('./jogo');
const Set = require('./set');
const Ponto = require('./ponto');


console.log("Iniciando");

var novoJogo = new Jogo('2021-08-12', '7:00', 'Rio Largo', 'Luiz');
novoJogo.info();

var set01 = new  Set();
set01.registrarPonto( () =>  new Ponto());
