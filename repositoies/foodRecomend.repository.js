const { Sequelize, DataTypes } = require("sequelize");
const { Foods, FoodImgs } = require("../models");

class FoodRecomendRepository {
  findCountry = async () => {
    const allCountryWithRandomImgUrl = await Foods.sequelize.query(
      `
      SELECT
        MIN(Foods.country) AS country,
        SUBSTRING_INDEX(
          GROUP_CONCAT(
            FoodImgs.imgUrl ORDER BY Foods.foodId, RAND()
          ),
          ',', 1
        ) AS randomImgUrl
      FROM Foods
      JOIN FoodImgs ON Foods.foodId = FoodImgs.foodId
      GROUP BY Foods.country;
      `,
      { type: Sequelize.QueryTypes.SELECT }
    );
    return allCountryWithRandomImgUrl;
  };

  findFood = async () => {
    const allCountryWithRandomImgUrl = await Foods.sequelize.query(
      `
      SELECT
        MIN(Foods.foodName) AS foodName,
        SUBSTRING_INDEX(
          GROUP_CONCAT(
            FoodImgs.imgUrl ORDER BY Foods.foodId, RAND()
          ),
          ',', 1
        ) AS randomImgUrl
      FROM Foods
      JOIN FoodImgs ON Foods.foodId = FoodImgs.foodId
      GROUP BY Foods.foodName;
      `,
      { type: Sequelize.QueryTypes.SELECT }
    );
    return allCountryWithRandomImgUrl;
  };

  findKind = async () => {
    const allCountryWithRandomImgUrl = await Foods.sequelize.query(
      `
      SELECT
        MIN(Foods.kind) AS kind,
        SUBSTRING_INDEX(
          GROUP_CONCAT(
            FoodImgs.imgUrl ORDER BY Foods.foodId, RAND()
          ),
          ',', 1
        ) AS randomImgUrl
      FROM Foods
      JOIN FoodImgs ON Foods.foodId = FoodImgs.foodId
      GROUP BY Foods.kind;
      `,
      { type: Sequelize.QueryTypes.SELECT }
    );
    return allCountryWithRandomImgUrl;
  };

  findDetail = async () => {
    const allCountryWithRandomImgUrl = await Foods.sequelize.query(
      `
      SELECT
        MIN(Foods.detail) AS detail,
        SUBSTRING_INDEX(
          GROUP_CONCAT(
            FoodImgs.imgUrl ORDER BY Foods.foodId, RAND()
          ),
          ',', 1
        ) AS randomImgUrl
      FROM Foods
      JOIN FoodImgs ON Foods.foodId = FoodImgs.foodId
      GROUP BY Foods.detail;
      `,
      { type: Sequelize.QueryTypes.SELECT }
    );
    return allCountryWithRandomImgUrl;
  };
}

module.exports = FoodRecomendRepository;
