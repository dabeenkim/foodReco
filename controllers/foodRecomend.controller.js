const FoodRecomendService = require("../services/foodRecomend.service");

class FoodRecomendController {
  constructor() {
    this.foodRecomendService = new FoodRecomendService();
  }

  /**
   * 카테고리 조회
   */
  findCategory = async (req, res, next) => {
    const Categories = await this.foodRecomendService.findCategory();
    res.status(200).json({ category: Categories });
  };

  /**
   * 음식 조회
   */
  findFood = async (req, res, next) => {
    const foods = await this.foodRecomendService.findFood();
    res.status(200).json({ food: foods });
  };

  addFood = async (req, res, next) => {
    const { category, foodName, imgUrl } = req.body;
  };
}

module.exports = FoodRecomendController;
