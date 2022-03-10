'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.BIGINT
      },
      location: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.BIGINT
      },
      mpesa: {
        type: Sequelize.BIGINT
      },
      registration: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.TEXT
      },
      autoplay: {
        type: Sequelize.BOOLEAN
      },
      gender: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('customers');
  }
};