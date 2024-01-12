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
      this.hasMany(models.Foods, {
        sourceKey: "foodId",
        foreignKey: "foodId",
      }),
        this.hasMany(models.Categories, {
          sourceKey: "categoryId",
          foreignKey: "categoryId",
        }),
        this.hasMany(models.Users, {
          sourceKey: "userEmail",
          foreignKey: "userEmail",
        });
    }
  }
  FoodImgs.init(
    {
      imgId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      foodId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userEmail: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imgOrder: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imgUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "FoodImgs",
    }
  );
  return FoodImgs;
};
