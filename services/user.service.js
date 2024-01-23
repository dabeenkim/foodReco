require("dotenv").config();
const UserRepository = require("../repositoies/user.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  /**
   * 회원가입
   * @param {string} email
   * @param {string} nickname
   * @param {string} password
   */
  userSignup = async (email, nickname, password) => {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SECRET_SORT)
    );

    await this.userRepository.userSignup(email, nickname, hashedPassword);
  };

  /**
   * 이메일 검증
   * @param {string} email
   */
  findByEmail = async (email) => {
    const existingEmail = await this.userRepository.findByEmail(email);
  };

  /**
   * 로그인
   * @param {string} email
   * @param {string} password
   */
  //로그인시 패스워드를 찾지않는이유?
  //email로 Users를 객체로 가져와서 안에서 password를 꺼내서사용
  Login = async (email, password) => {
    const user = await this.userRepository.findByEmail(email);
    const comparePW = await bcrypt.compare(password, user.password);
    console.log(comparePW);
    if (comparePW === false) {
      console.log("아이디 또는 비밀번호가 맞지않습니다.");
    }
  };

  generateToken = async (email) => {
    const token = jwt.sign({ email }, process.env.MYSECRET_KEY, {
      expiresIn: "3h",
    });
    return token;
  };
}

module.exports = UserService;
