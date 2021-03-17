const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  let User = sequelize.define('User', {
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
    fileName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['name']
      }
    ]});

  return User;
};

