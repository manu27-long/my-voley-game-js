const Jogo = require('./jogo');
const Set = require('./set');


console.log("Iniciando");

var novoJogo = new Jogo('2021-08-12', '7:00', 'Rio Largo', 'Luiz');
novoJogo.info();

var set01 = new  Set();
set01.registrar( new Ponto());
