const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  let Country = sequelize.define('Country', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    capital: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    urlName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    video: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    currency: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    map: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    coordinates: {
      allowNull: false,
      type: DataTypes.JSON,
    },
  }, {timestamps: false});

  return Country;

};

