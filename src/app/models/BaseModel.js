import { Model } from 'objection'
import visibility from 'objection-visibility'

/**
 * Class BaseModel.
 * @extends Model
 */
export default class BaseModel extends visibility(Model) {
    static get hidden() {
        let hidden = ['created_at', 'updated_at']

        return hidden.concat(this.hiddenFields)
    }

    static get hiddenFields() {
        return []
    }
}
