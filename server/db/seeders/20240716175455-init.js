const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        lastName: 'Jonovich',
        surname: 'asdf',
        email: 'john@john',
        hashpass: bcrypt.hashSync('123', 10),
        fedDistrict: 'Центральный',
        region: 'Москва',
        municipality: 'Арбат',
      },
      {
        name: 'Jane',
        lastName: 'Janovna',
        surname: 'adfd',
        email: 'jane@jane',
        hashpass: bcrypt.hashSync('123', 10),
        fedDistrict: 'Центральный',
        region: 'Москва',
        municipality: 'Таганский',
      },
    ]);
    await queryInterface.bulkInsert('Inits', [
      {
        name: 'Инициата 1',
        motivation: 'хочу очень сильно, прям пипец',
        level: 'Муниципальный',
        dateEnd: new Date(2025, 0, 1),
        authorId: 1,
      },
      {
        name: 'Инициата 2',
        motivation: 'хочу очень очень сильно, прям пипец пипец',
        level: 'Федеральный',
        dateEnd: new Date(2025, 4, 1),
        authorId: 2,
      },
    ]);
    await queryInterface.bulkInsert('UserInits', [
      {
        userId: 1,
        initId: 1,
        vote: true,
      },
      {
        userId: 1,
        initId: 2,
        vote: false,
      },
      {
        userId: 2,
        initId: 1,
        vote: true,
      },
      {
        userId: 2,
        initId: 1,
        vote: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
