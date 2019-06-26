'use strict';
module.exports = (sequelize, DataTypes) => {
  const Broker = sequelize.define('Broker', {
    name: { type: DataTypes.STRING, allowNull: false }
  }, {});
  Broker.associate = function(models) {
    // associations can be defined here
    this.hasMany(models.Investment);
  };
  return Broker;
};