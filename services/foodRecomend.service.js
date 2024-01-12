const FoodRecomendRepository = require("../repositoies/foodRecomend.repository");

class FoodRecomendService {
  constructor() {
    this.foodRecomendRepository = new FoodRecomendRepository();
  }

  foodRecomendRouter = async () => {
    findFoods = await this.foodRecomendRepository.foodRecomendRouter();

    return findFoods;
  };
}

module.exports = FoodRecomendService;
