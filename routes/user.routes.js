const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const userController = new UserController();

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);

module.exports = router;
