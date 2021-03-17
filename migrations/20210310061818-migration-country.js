'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.createTable('Countries', {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        urlName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        video: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        capital: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false
        },
        currency: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        coordinates: {
          type: Sequelize.DataTypes.JSON,
          allowNull: false
        },
        timezone: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        language: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
      })
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.dropTable('Countries'),
      ]);
    });
  }
};
