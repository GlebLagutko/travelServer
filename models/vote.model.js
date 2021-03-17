const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  let Vote = sequelize.define('Vote', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    rate: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    AttractionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {timestamps: false});

  return Vote;

};

