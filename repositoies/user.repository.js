const { Users } = require("../models");

class UserRepository {
  /**
   * 회원가입전 이메일검증, 로그인
   * @param {string} email
   * @returns
   */
  findByEmail = async (email) => {
    const findEmail = await Users.findOne({
      where: { email: email },
    });
    return findEmail;
  };

  /**
   * 회원가입 정보등록
   * @param {string} email
   * @param {string} nickname
   * @param {string} hashedPassword
   */
  userSignup = async (email, nickname, hashedPassword) => {
    await Users.create({
      email: email,
      nickname: nickname,
      password: hashedPassword,
    });
  };
}

module.exports = UserRepository;
