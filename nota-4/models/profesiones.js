/******************************************
 *  P R A C T I C A    C A L I F I C A D A
 *  Nota #4
 * 
 * Nombre :  Mario Daniel Quispe Ancasi
 * Codigo :  20181529
 ******************************************/
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesiones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profesiones.hasMany(models.Cliente,{
        foreignKey:"profId",
        as:"clientito"
      });
    }
  };
  Profesiones.init({
    profesion: {type:DataTypes.STRING,
    primarykey:true
    },
  }, {
    sequelize,
    modelName: 'Profesiones',
  });
  return Profesiones;
};