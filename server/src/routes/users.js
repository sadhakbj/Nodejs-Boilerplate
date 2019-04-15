const express = require("express");
let router = express.Router();
const UsersController = require("../app/http/controllers/UsersController");

router.get("/", UsersController.getAll);
router.post("/store", UsersController.create);

router.post("/authenticate", UsersController.authenticate);

module.exports = router;
