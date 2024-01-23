const UserService = require("../services/user.service");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  userSignup = async (req, res, next) => {
    // try {
    const { email, nickname, password, confirm } = req.body;
    if (password !== confirm) {
      console.log("비밀번호가 맞지않습니다.");
    }

    await this.userService.findByEmail(email);
    await this.userService.userSignup(email, nickname, password);

    return res.status(200).json({ message: "회원가입에 성공하였습니다." });
    // } catch (error) {
    //   next(error);
    // }
  };

  userLogin = async (req, res, next) => {
    const { email, password } = req.body;

    await this.userService.Login(email, password);

    const token = await this.userService.generateToken(email);
    res.set("Authorization", `${token}`);

    return res.status(200).json({ message: "로그인에 성공하였습니다." });
  };
}

module.exports = UserController;
