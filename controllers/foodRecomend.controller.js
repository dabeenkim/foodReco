const FoodRecomendService = require("../services/foodRecomend.service");

class FoodRecomendController {
  constructor() {
    this.foodRecomendService = new FoodRecomendService();
  }

  /**
   * 음식 조회
   */
  loadAllFood = async (req, res, next) => {
    const findFood = await this.foodRecomendService.loadAllFood();
    res.status(200).json({ foods: findFood });
  };
}

module.exports = FoodRecomendController;
