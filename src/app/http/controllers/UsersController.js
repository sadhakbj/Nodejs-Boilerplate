import { HTTP_INTERNAL_SERVER_ERROR } from '../../constants/response'
import User from '../../models/User'
import { error, success } from '../../Services/Formatter/response'
import logger from '../../Services/logger'

/**
 * UserController description.
 */
class UserController {
    /**
     * Get all users.
     *
     */
    async getAll(req, res) {
        try {
            const users = await User.query()
            return res.json(success('Users fetched succesfully', users))
        } catch (e) {
            return res.json(error(HTTP_INTERNAL_SERVER_ERROR, e.message))
        }
    }

    async show(req, res) {
        try {
            const user = await User.query().findById(parseInt(req.params.id))
            if (!user) {
                return res.json(error(400, 'User not found'))
            }
            return res.json(success('User details fetched successfully.', user))
        } catch (excepetion) {
            logger.error(excepetion)

            return res.json(error(500))
        }
    }

    /**
     * Create new user.
     */
    async create(req, res, next) {
        try {
            const user = await User.query().insert(req.body)

            return res.json(success('Successfully added new user.', user))
        } catch (excepetion) {
            console.log(excepetion)
            return res.json(error(500))
        }
    }

    async getCurrentUser(req, res, next) {
        const user = await User.query().findById(1)

        return res.json(success('User fetched succesfully', user))
    }
}
export default new UserController()
