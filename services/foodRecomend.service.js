const FoodRecomendRepository = require("../repositoies/foodRecomend.repository");

class FoodRecomendService {
  constructor() {
    this.foodRecomendRepository = new FoodRecomendRepository();
  }

  findCountry = async () => {
    const Countries = await this.foodRecomendRepository.findCountry();
    //괄호제거
    // const uniqueCountries = Countries.map((item) => item.country);
    return Countries;
  };

  findFood = async () => {
    const Foods = await this.foodRecomendRepository.allFoods();
    return Foods;
  };
}

module.exports = FoodRecomendService;
