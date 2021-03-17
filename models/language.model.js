const { DataTypes } = require('sequelize');


// import pkg from 'sequelize';
// const {DataTypes} = pkg;

// let Country = require('./country');

module.exports = (sequelize) => {
  return sequelize.define('Language', {
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
    shortName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {timestamps: false});
};

