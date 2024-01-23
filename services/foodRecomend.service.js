const FoodRecomendRepository = require("../repositoies/foodRecomend.repository");

class FoodRecomendService {
  constructor() {
    this.foodRecomendRepository = new FoodRecomendRepository();
  }

  findCategory = async () => {
    await this.foodRecomendRepository.allCategories();
  };

  findFood = async () => {
    await this.foodRecomendRepository.allFoods();
  };
}

module.exports = FoodRecomendService;
