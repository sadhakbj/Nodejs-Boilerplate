const { Model } = require("objection");
const visibility = require("objection-visibility").default;

/**
 * Class BaseModel.
 * @extends Model
 */
class BaseModel extends visibility(Model) {
  static get hidden() {
    let hidden = ["created_at", "updated_at"];

    return hidden.concat(this.hiddenFields);
  }

  static get hiddenFields() {
    return [];
  }
}

module.exports = BaseModel;
