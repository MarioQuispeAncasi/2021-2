'use strict';
const {
  Model
} = require('sequelize');
const curso = require('./curso');
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Alumno.belongsTo(models.Curso,{
        foreignkey:"cursoId",
        as:"cursito"
      });
    }
  };
  Alumno.init({
    codigo: {
      type:DataTypes.INTEGER,
      primarykey:true
    },
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Alumno',
  });
  return Alumno;
};