module.exports = function(sequelize, DataTypes) {
    var Cravings = sequelize.define("cravings", {
      name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Cravings;
  };