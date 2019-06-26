'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    amount: { type: DataTypes.DECIMAL(16, 2), allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false }
  }, {});
  Transaction.associate = function (models) {
    // associations can be defined here
    this.belongsTo(models.Investment);
  };
  return Transaction;
};