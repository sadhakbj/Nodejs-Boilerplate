import Password from 'objection-password'
import { TBL_USERS } from '../../app/constants/dbtable'
import BaseModel from './BaseModel'
/**
 *  Class User Model.
 * @extends BaseModel
 */
export default class User extends Password()(BaseModel) {
    /**
     * Specify the table name.
     *
     * @return string
     */
    static get tableName() {
        return TBL_USERS
    }

    static get hiddenFields() {
        return ['password']
    }
}
