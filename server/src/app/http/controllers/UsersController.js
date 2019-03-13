const User = require("../../models/User");

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

    return res.json({
      message: "Users fetched successfully.",
      data: users
    });
  }

  /**
   * Create new user.
   */
  async create(req, res, next) {
    try {
      const user = await User.query().insert(req.body);

      return res.json({
        success: true,
        message: "Successfully added new user.",
        data: user
      });
    } catch (excepetion) {
      return res.json({
        success: false,
        message: excepetion.detail,
        status: 500
      });
    }
  }

  async getCurrentUser(req, res, next) {
    const user = await User.query().findById(1);

    return res.json({
      message: "Data fetched Fetched successfully.",
      data: {
        user
      }
    });
  }
}

module.exports = new UserController();
