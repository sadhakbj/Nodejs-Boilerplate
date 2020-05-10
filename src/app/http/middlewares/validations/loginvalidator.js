import Validator from 'validatorjs'
import { HTTP_UNPROCESSABLE_ENTITY } from '../../../constants/response'

export default (req, res, next) => {
    const data = req.body
    const rules = {
        email: 'required|email',
        password: 'required',
    }

    let validation = new Validator(data, rules)

    if (validation.fails()) {
        return res.status(HTTP_UNPROCESSABLE_ENTITY).send(validation.errors)
    }

    next()
}
