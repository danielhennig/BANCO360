const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface) {
    const senhaCriptografada = await bcrypt.hash('123456', 10);

    await queryInterface.bulkInsert('Conta', [
      {
        id: uuidv4(),
        nome: 'João MP',
        cpf: '33333333333',
        email: 'joao@itau.com',
        senha: senhaCriptografada,
        numeroConta: '333333',
        saldo: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Conta', null, {});
  }
};
