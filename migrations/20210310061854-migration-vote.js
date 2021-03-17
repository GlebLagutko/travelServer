'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.createTable('Votes', {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        rate: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        AttractionId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'Attractions',
            },
            key: 'id'
          },
          allowNull: false
        },
        UserId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'Users',
            },
            key: 'id'
          },
          allowNull: false
        },
      })
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.dropTable('Attractions'),
      ]);
    });
  }
};
