const express = require("express");
const router = express.Router();

const FoodRecomendController = require("../controllers/foodRecomend.controller");
const foodrecomendController = new FoodRecomendController();

router.get("/find/categories", foodrecomendController.findCategory);
router.get("/find/foods", foodrecomendController.findFood);

module.exports = router;
