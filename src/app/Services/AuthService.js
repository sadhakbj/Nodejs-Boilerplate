const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../../config/app");

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
}

module.exports = new AuthService();
