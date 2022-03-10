'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    location: DataTypes.STRING,
    age: DataTypes.BIGINT,
    mpesa: DataTypes.BIGINT,
    registration: DataTypes.STRING,
    comments: DataTypes.TEXT,
    autoplay: DataTypes.BOOLEAN,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};