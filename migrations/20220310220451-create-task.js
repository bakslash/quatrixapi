'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      assigned: {
        type: Sequelize.DATE
      },
      in_progress: {
        type: Sequelize.DATE
      },
      completed: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.DATE
      },
      deferred: {
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};