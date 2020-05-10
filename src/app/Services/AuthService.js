import jwt from 'jsonwebtoken'
import appConfig from '../../config/app'
import User from '../models/User'

class AuthService {
    generateToken(user) {
        const { id, email } = user
        return jwt.sign(
            {
                id,
                email,
            },
            appConfig.jwt_secret,
            {
                expiresIn: '4h',
            }
        )
    }

    async findUserByEmail(email) {
        return await User.query().first().where({ email })
    }
}

export default new AuthService()
