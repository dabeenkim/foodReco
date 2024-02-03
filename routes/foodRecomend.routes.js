const express = require("express");
const router = express.Router();

const FoodRecomendController = require("../controllers/foodRecomend.controller");
const foodrecomendController = new FoodRecomendController();

router.get("/find/country", foodrecomendController.findCountry);
router.get("/find/food", foodrecomendController.findFood);
router.get("/find/kind", foodrecomendController.findKind);
router.get("/find/detail", foodrecomendController.findDetail);

module.exports = router;
