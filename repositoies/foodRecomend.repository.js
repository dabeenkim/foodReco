const Categories = require("../models");

class FoodRecomendRepository {
  allCategories = async () => {
    const allCategories = await Categories.findAll({});
    return allCategories;
  };
}

module.exports = FoodRecomendRepository;
