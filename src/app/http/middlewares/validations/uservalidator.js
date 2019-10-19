const Validator = require("validatorjs")
const { HTTP_UNPROCESSABLE_ENTITY } = require("../../../constants/response")

module.exports = (req, res, next) => {
    const data = req.body
    const rules = {
        email: "required|email",
        name: "required",
        username: "required",
        password: "required",
    }

    let validation = new Validator(data, rules)

    if (validation.fails()) {
        return res.status(HTTP_UNPROCESSABLE_ENTITY).send(validation.errors)
    }

    next()
}
