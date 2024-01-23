"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FoodImgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Foods, {
        sourceKey: "foodId",
        foreignKey: "foodId",
      });
    }
  }
  FoodImgs.init(
    {
      imgId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      foodId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      detail: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imgOrder: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      imgUrl: {
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
      modelName: "FoodImgs",
    }
  );
  return FoodImgs;
};
