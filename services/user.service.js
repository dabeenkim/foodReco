const UserRepository = require("../repositoies/user.repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
}

module.exports = UserService;
