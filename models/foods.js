"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.FoodImgs, {
        sourceKey: "foodId",
        foreignKey: "foodId",
      });
    }
  }
  Foods.init(
    {
      foodId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      foodName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      kind: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      detail: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Foods",
    }
  );
  return Foods;
};
