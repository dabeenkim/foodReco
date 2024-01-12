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
      }),
        this.hasMany(models.Users, {
          sourceKey: "userEmail",
          foreignKey: "userEmail",
        }),
        this.hasMany(models.Categories, {
          sourceKey: "categoryId",
          foreignKey: "categoryId",
        });
    }
  }
  Foods.init(
    {
      foodId: {
        allowNull: false,
        primaryKey: true,
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
      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
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
      modelName: "Foods",
    }
  );
  return Foods;
};
