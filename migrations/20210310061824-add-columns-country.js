'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Countries', // table name
        'image', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Countries', // table name
        'map', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.bulkDelete('Attractions', null, {}),
      queryInterface.bulkDelete('Countries', null, {})
    ]);
  }
};
