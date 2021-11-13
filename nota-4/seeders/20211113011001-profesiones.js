'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Profesiones',{
     profesion: 'Abogado',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    profesion: 'Ingeniero',
    createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    profesion: 'Contador',
    createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    profesion: 'Gasfitero xd',
    createdAt: new Date(),
     updatedAt: new Date()
   })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
