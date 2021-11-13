'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Cliente.belongsTo(models.Profesion,{
        foreignkey:"profId",
        as:"prof"
      });
    }
  };
  Cliente.init({
    email: {type:DataTypes.STRING,
    primarykey:true
  },
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    profesion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};