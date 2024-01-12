"use strict";
const { Model } = require("sequelize");
const foodimgs = require("./foodimgs");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Categories, {
        sourceKey: "categoryId",
        foreignKey: "categoryId",
      }),
        this.hasOne(models.FoodImgs, {
          sourceKey: "categoryId",
          foreignKey: "categoryId",
        }),
        this.hasMany(models.Users, {
          sourceKey: "userEmail",
          foreignKey: "userEmail",
        });
    }
  }
  Categories.init(
    {
      categoryId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      userEmail: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      category: {
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
      modelName: "Categories",
    }
  );
  return Categories;
};
