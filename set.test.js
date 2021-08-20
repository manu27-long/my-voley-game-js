
const Jogo = require('./jogo');

  test('Testar data', () => {
  novoJogo = new Jogo('08-09-2021', '08:00', 'Rio Largo', 'Luiz');

  expect(novoJogo.getData()).toBe('08-09-2021');
}
  );

  test('testar mudar a data', () => {
   var novoJogo = new Jogo('08-09-2021', '08;00', 'Rio Largo', 'Luiz')
   novoJogo.setData('20-09-2021');
  expect(novoJogo.getData()).toBe('20-09-2021');
  }
   );

   
   beforeAll(() =>{
     console.log('Before all');
   }
    );

    beforeEach(() => {
      console.log('Before each');
    }
     );

     