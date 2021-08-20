
const Jogo = require('./jogo');

  test('Teste', () => {
  var novoJogo = new Jogo();

  expect(novoJogo.getData()).toEqual('12-09-2019');
}
  );