const FoodRecomendService = require("../services/foodRecomend.service");

class FoodRecomendController {
  constructor() {
    this.foodRecomendService = new FoodRecomendService();
  }

  /**
   * 카테고리 조회
   */
  findCountry = async (req, res, next) => {
    const country = await this.foodRecomendService.findCountry();
    res.status(200).json({ country });
  };

  /**
   * 음식 조회
   */
  findFood = async (req, res, next) => {
    const foods = await this.foodRecomendService.findFood();
    res.status(200).json({ foods });
  };

  addFood = async (req, res, next) => {
    const { category, foodName, imgUrl } = req.body;
  };
}

module.exports = FoodRecomendController;
