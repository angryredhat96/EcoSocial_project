/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [
      {
        title: 'Сабурово',
        description: 'Административно-территориальная единица и одноимённое муниципальное образование, существовавшие до начала 2017 года в центральной части Московской области России.',
        latitude: 55.86993940686203,
        longitude: 37.26018024444998,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Митинское кладбище',
        description: 'Живописное кладбище в Красногорском Административном округе',
        latitude: 55.87520963706954,
        longitude: 37.34728103439325,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places', null, {});
  },
};
