const AuthService = require("../../Services/AuthService")
const { success, error } = require("../../Services/Formatter/response")
const { HTTP_UNAUTHORIZED, HTTP_NOT_FOUND } = require("../../constants/response")

class AuthController {
    /**
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
     */
    async login(req, res, next) {
        const { email, password } = req.body
        const user = await AuthService.findUserByEmail(email)

        if (!user || !(await user.verifyPassword(password))) {
            return res.status(HTTP_UNAUTHORIZED).json(error(HTTP_UNAUTHORIZED, "Invalid credentials."))
        }

        const token = AuthService.generateToken(user)

        return res.json(success("User logged in successfully.", { user, token }))
    }

    /**
     *
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
     */
    async requestPasswordReset(req, res, next) {
        const { email } = req.body
        const user = AuthService.findUserByEmail(email)

        if (!user) {
            return res.status(HTTP_NOT_FOUND).json(error(HTTP_NOT_FOUND, "User not found"))
        }
    }
}

module.exports = new AuthController()
