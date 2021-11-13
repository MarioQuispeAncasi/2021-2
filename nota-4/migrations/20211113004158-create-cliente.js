/******************************************
 *  P R A C T I C A    C A L I F I C A D A
 *  Nota #4
 * 
 * Nombre :  Mario Daniel Quispe Ancasi
 * Codigo :  20181529
 ******************************************/
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      profesion: {
        type: Sequelize.STRING
      },
      profId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Profesiones',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  }
};