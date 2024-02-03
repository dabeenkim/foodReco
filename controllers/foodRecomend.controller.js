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
    const food = await this.foodRecomendService.findFood();
    res.status(200).json({ food });
  };

  /**
   * 종류 조회
   */
  findKind = async (req, res, next) => {
    const kind = await this.foodRecomendService.findKind();
    res.status(200).json({ kind });
  };

  /**
   * 세부음식이름 조회
   */
  findDetail = async (req, res, next) => {
    const detail = await this.foodRecomendService.findDetail();
    res.status(200).json({ detail });
  };

  addFood = async (req, res, next) => {
    const { category, foodName, imgUrl } = req.body;
  };
}

module.exports = FoodRecomendController;
