'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Curso.hasMany(models.Alumno,{
        foreignKey: 'cursoId',
        as: 'alumnitos'
      })
    }
  };
  Curso.init({
    codigo: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    ciclo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};