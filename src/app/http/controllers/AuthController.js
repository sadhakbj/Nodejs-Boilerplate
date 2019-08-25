const AuthService = require("../../Services/AuthService");
const { success, error } = require("../../Services/Formatter/response");

class AuthController {
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await AuthService.findUserByEmail(email);

    if (!user || !(await user.verifyPassword(password))) {
      return res.status(401).json(error(401, "Invalid credentials."));
    }

    const token = AuthService.generateToken(user);

    return res
      .status(200)
      .json(success("User logged in successfully.", { user, token }));
  }

  async requestPasswordReset(req, res, next) {
    const { email } = req.body;
    const user = AuthService.findUserByEmail(email);

    if (!user) {
      return res.status(401).json(error(401, "User not found"));
    }
  }
}

module.exports = new AuthController();
