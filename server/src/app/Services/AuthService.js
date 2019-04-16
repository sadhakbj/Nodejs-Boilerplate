const jwt = require("jsonwebtoken");
class AuthService {
  authenticate() {}

  generateToken(user) {
    const { id, email } = user;
    const token = jwt.sign(
      {
        id,
        email
      },
      "secret",
      {
        expiresIn: "1h"
      }
    );

    return token;
  }
}

module.exports = new AuthService();
