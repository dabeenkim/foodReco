const { Sequelize, DataTypes } = require("sequelize");
const { Foods, FoodImgs } = require("../models");

class FoodRecomendRepository {
  findCountry = async () => {
    const allCountry = await Foods.sequelize.query(
      `
      SELECT MIN(country) AS country
      FROM Foods
      GROUP BY country
      `,
      { type: Sequelize.QueryTypes.SELECT }
    );
    return allCountry;
  };
}

module.exports = FoodRecomendRepository;
