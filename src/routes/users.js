const express = require("express");
let router = express.Router();
const authenticate = require("../app/http/middlewares/authenticate");
const userValidator = require('../app/http/middlewares/validations/uservalidator')
const UsersController = require("../app/http/controllers/UsersController");

router.get("/", authenticate, UsersController.getAll);
router.post("/store", userValidator, UsersController.create);
router.get("/:id", UsersController.show);

module.exports = router;
