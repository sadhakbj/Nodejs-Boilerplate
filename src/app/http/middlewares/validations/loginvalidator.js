const Validator = require("validatorjs");

module.exports = (req, res, next) => {
  const data = req.body;
  const rules = {
    email: "required|email",
    password: "required"
  };

  let validation = new Validator(data, rules);

  if (validation.fails()) {
    return res.status(422).send(validation.errors);
  }

  next();
};
