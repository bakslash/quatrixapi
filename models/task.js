'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  task.init({
    assigned: DataTypes.DATE,
    in_progress: DataTypes.DATE,
    completed: DataTypes.DATE,
    status: DataTypes.STRING,
    completed: DataTypes.DATE,
    deferred: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};