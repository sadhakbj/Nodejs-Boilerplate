const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../../config/app");
const User = require("../models/User");

class AuthService {
  generateToken(user) {
    const { id, email } = user;
    const token = jwt.sign(
      {
        id,
        email
      },
      jwt_secret,
      {
        expiresIn: "4h"
      }
    );

    return token;
  }

  async findUserByEmail(email) {
    const user = await User.query()
      .first()
      .where({ email });


    return user;
  }
}

module.exports = new AuthService();
