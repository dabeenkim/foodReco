const { Foods, FoodImgs } = require("../models");

class FoodSaveRepository {
  addFood = async (countryName, foodName, kindName, detailName, t) => {
    const food = await Foods.create({
      country: countryName,
      foodName: foodName,
      kind: kindName,
      detail: detailName,
    });
    return food;
  };

  addSingleImg = async (foodId, detail, imgUrl) => {
    const insertImg = await FoodImgs.create({
      foodId: foodId,
      imgUrl: imgUrl[0],
      detail: detail,
    });
  };

  addMultiImg = async (foodId, detail, imgUrl, imgOrder) => {
    await FoodImgs.create({
      foodId: foodId,
      detail: detail,
      imgUrl: imgUrl,
      imgOrder: imgOrder,
    });
  };
}

module.exports = FoodSaveRepository;
