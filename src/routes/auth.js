const express = require("express");
let router = express.Router();
const authenticate = require("../app/http/middlewares/authenticate");
const AuthController = require("../app/http/controllers/AuthController");
const validateLogin = require("../app/http/middlewares/validations/loginvalidator");

router.post("/login", validateLogin, AuthController.login);
router.post("/forgot-password", AuthController.requestPasswordReset);

module.exports = router;
