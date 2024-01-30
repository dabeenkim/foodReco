const express = require("express");
const router = express.Router();

const FoodRecomendController = require("../controllers/foodRecomend.controller");
const foodrecomendController = new FoodRecomendController();

router.get("/find/country", foodrecomendController.findCountry);
router.get("/find/foods", foodrecomendController.findFood);

module.exports = router;
