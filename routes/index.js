const express = require("express");
const router = express.Router();

const userRouter = require("./user.routes");
const foodRecomendRouter = require("./foodRecomend.routes");

router.use("/auth", userRouter);
router.use("/foodRecomend", foodRecomendRouter);

module.exports = router;
