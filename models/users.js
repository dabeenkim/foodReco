"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Categories, {
        sourceKey: "userEmail",
        foreignKey: "userEmail",
      }),
        this.hasOne(models.Foods, {
          sourceKey: "userEmail",
          foreignKey: "userEmail",
        }),
        this.hasOne(models.FoodImgs, {
          sourceKey: "userEmail",
          foreignKey: "userEmail",
        });
    }
  }
  Users.init(
    {
      userEmail: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: true,
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
      modelName: "Users",
    }
  );
  return Users;
};
