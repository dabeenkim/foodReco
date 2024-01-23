const express = require("express");
const router = express.Router();

const userRouter = require("./user.routes");
const foodRecomendRouter = require("./foodRecomend.routes");
const foodSaveRouter = require("./foodSave.routes");

router.use("/auth", userRouter);
router.use("/", foodRecomendRouter, foodSaveRouter);

module.exports = router;
