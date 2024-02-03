const FoodRecomendRepository = require("../repositoies/foodRecomend.repository");

class FoodRecomendService {
  constructor() {
    this.foodRecomendRepository = new FoodRecomendRepository();
  }

  findCountry = async () => {
    const countries = await this.foodRecomendRepository.findCountry();
    //괄호제거
    // const uniqueCountries = Countries.map((item) => item.country);
    return countries;
  };

  findFood = async () => {
    const foods = await this.foodRecomendRepository.findFood();
    return foods;
  };

  findKind = async () => {
    const kinds = await this.foodRecomendRepository.findKind();
    return kinds;
  };

  findDetail = async () => {
    const detail = await this.foodRecomendRepository.findDetail();
    return detail;
  };
}

module.exports = FoodRecomendService;
