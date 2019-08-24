const User = require("../../models/User");
const AuthService = require("../../Services/AuthService");
const { success, error } = require("../../Services/Formatter/response");
const { logger } = require("../../Services/logger");

/**
 * UserController description.
 */
class UserController {
  /**
   * Get all users.
   *
   */
  async getAll(req, res) {
    const users = await User.query();

    return res.json(success("Users fetched succesfully", users));
  }

  async show(req, res) {
    try {
      const user = await User.query().findById(parseInt(req.params.id));
      if (!user) {
        return res.json(error(400, "User not found"));
      }
      return res.json(success("User details fetched successfully.", user));
    } catch (excepetion) {
      logger.error(excepetion);

      return res.json(error(500));
    }
  }

  /**
   * Create new user.
   */
  async create(req, res, next) {
    try {
      const user = await User.query().insert(req.body);

      return res.json(success("Successfully added new user.", user));
    } catch (excepetion) {
      return res.json(error(500));
    }
  }

  async getCurrentUser(req, res, next) {
    const user = await User.query().findById(1);

    return res.json(success("User fetched succesfully", user));
  }
}

module.exports = new UserController();
