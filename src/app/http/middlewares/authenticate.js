import jwt from 'jsonwebtoken'
const { success, error } = require('../../Services/Formatter/response')
const { jwt_secret } = require('../../../config/app')

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, jwt_secret)
        req.userData = decoded
        next()
    } catch (exception) {
        return res.json(error(401, 'User is not authenticated.'))
    }
}
