const express = require("express");
const router = express.Router();

const RecomendController = require("../controllers/foodRecomend.controller");
const recomendController = new RecomendController();

module.exports = RecomendController;
