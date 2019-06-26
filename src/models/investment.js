'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investment = sequelize.define('Investment', {
    name: { type: DataTypes.STRING, allowNull: false }
  }, {});
  Investment.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.Broker);
    this.hasMany(models.Transaction);
    this.hasMany(models.BalanceUpdate);
  };
  return Investment;
};