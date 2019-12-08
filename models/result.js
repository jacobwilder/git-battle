'use strict';
module.exports = (sequelize, DataTypes) => {
  const result = sequelize.define('result', {
    winner_name: DataTypes.STRING,
    winner_score: DataTypes.INTEGER,
    loser_name: DataTypes.STRING,
    loser_score: DataTypes.INTEGER
  }, {});
  result.associate = function(models) {
    // associations can be defined here
  };
  return result;
};