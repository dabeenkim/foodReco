const express = require("express");
const router = express.Router();

const FoodSaveController = require("../controllers/foodSave.controller");
const foodsaveController = new FoodSaveController();

router.post("/addition", foodsaveController.addFood);

module.exports = router;
