const BaseModel = require("./BaseModel")
const { users } = require("../../app/constants/dbtable")
const Password = require("objection-password")()

/**
 *  Class User Model.
 * @extends BaseModel
 */
class User extends Password(BaseModel) {
    /**
     * Specify the table name.
     *
     * @return string
     */
    static get tableName() {
        return users
    }

    static get hiddenFields() {
        return ["password"]
    }
}

module.exports = User
