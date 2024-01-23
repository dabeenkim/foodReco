const FoodSaveRepository = require("../repositoies/foodSave.repository");
const { sequelize } = require("../models");

class FoodSaveService {
  constructor() {
    this.foodSaveRepository = new FoodSaveRepository();
  }

  addFood = async (country, food, kind, detail, imgUrl) => {
    try {
      let newFood = await this.foodSaveRepository.addFood(
        country,
        food,
        kind,
        detail
      );

      if (imgUrl.length === 1) {
        await this.foodSaveRepository.addSingleImg(
          newFood.foodId,
          detail,
          imgUrl
        );
      } else if (imgUrl.length > 1) {
        for (let imgOrder = 1; imgOrder <= imgUrl.length; imgOrder++) {
          await this.foodSaveRepository.addMultiImg(
            newFood.foodId,
            detail,
            imgUrl[imgOrder - 1],
            imgOrder
          );
        }
      }
      return newFood;
    } catch (error) {
      console.error(error);
    }
  };

  //트랜잭션예시
  // addFood = async (country, food, kind, detail, imgUrl) => {
  //   try {
  //     let newFood;
  //     await sequelize.transaction(async (t) => {
  //       newFood = await this.foodSaveRepository.addFood(
  //         country,
  //         food,
  //         kind,
  //         detail,
  //         t
  //       );

  //       if (imgUrl.length === 1) {
  //         await this.foodSaveRepository.addSingleImg(newFood.foodId, imgUrl, t);
  //       } else if (imgUrl.length > 1) {
  //         for (let imgOrder = 1; imgOrder <= imgUrl.length; imgOrder++) {
  //           await this.foodSaveRepository.addMultiImg(
  //             newFood.foodId,
  //             imgUrl[imgOrder - 1],
  //             imgOrder,
  //             t
  //           );
  //         }
  //       }
  //     });
  //     console.log("트랜잭션 성공", newFood);
  //     return newFood;
  //   } catch (error) {
  //     console.error("트랜잭션 실패", error);
  //   }
  // };
}
module.exports = FoodSaveService;
