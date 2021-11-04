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
   //AQUI SE INSERTA LA DATAAAAAAAAAAAAAAA
   await queryInterface.bulkInsert('Usuario1s',[
    {
      nombre:"Alumno-100",
      codigo:"202100100",
      edad:20,
      createdAt: new Date(),
      updatedAt : new Date()
    },{
      nombre:"Alumno-101",
      codigo:"202100101",
      edad:21,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      nombre:"Alumno-103",
      codigo:"202100102",
      edad:22,
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      nombre:"Alumno-104",
      codigo:"202100103",
      edad:23,
      createdAt: new Date(),
      updatedAt : new Date()
    }
   ],{})
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
