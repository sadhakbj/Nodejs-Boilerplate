const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../../config/app");
class AuthService {
  generateToken(user) {
    console.log(jwt_secret);
    const { id, email } = user;
    const token = jwt.sign(
      {
        id,
        email
      },
      jwt_secret,
      {
        expiresIn: "1h"
      }
    );

    return token;
  }
}

module.exports = new AuthService();
