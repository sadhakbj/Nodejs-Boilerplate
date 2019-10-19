const jwt = require("jsonwebtoken")
const { jwt_secret } = require("../../config/app")
const User = require("../models/User")

class AuthService {
    generateToken(user) {
        const { id, email } = user
        return jwt.sign(
            {
                id,
                email,
            },
            jwt_secret,
            {
                expiresIn: "4h",
            },
        )
    }

    async findUserByEmail(email) {
        console.log(User)
        return await User.query().first().where({ email })
    }
}

module.exports = new AuthService()
