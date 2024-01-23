const FoodSaveService = require("../services/foodSave.service");

class FoodSaveController {
  constructor() {
    this.foodSaveService = new FoodSaveService();
  }

  addFood = async (req, res, next) => {
    const { country, food, kind, detail, imgUrl } = req.body;

    const addition = await this.foodSaveService.addFood(
      country,
      food,
      kind,
      detail,
      imgUrl
    );

    res.status(200).json({ message: "음식이 목록에 추가되었습니다." });
  };
}

module.exports = FoodSaveController;
