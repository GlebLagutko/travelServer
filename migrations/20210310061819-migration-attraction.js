'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.createTable('Attractions', {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        image: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false
        },
        CountryId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'Countries',
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
