const User = require("../../models/User");
const AuthService = require("../../Services/AuthService");
const { success, error } = require("../../Services/Formatter/response");

class AuthController {
  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await User.query()
      .first()
      .where({ email });

    if (!user || !(await user.verifyPassword(password))) {
      return res.json(error(401, "Invalid credentials."));
    }

    const token = AuthService.generateToken(user);
    user.token = token;

    return res.json(success("User logged in successfully.", { user }));
  }
}

module.exports = new AuthController();
