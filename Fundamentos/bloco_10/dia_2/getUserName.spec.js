// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

const { getUserName } = require('./getUserName');

describe('getUserName - promise', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });
});

// feito baseado no gabarito

test('when the user id exists', async () => {
  await expect(getUserName(4)).resolves.toBe('Mark')
})

test('when the user id does not exists', async () => {
  await expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' })
})