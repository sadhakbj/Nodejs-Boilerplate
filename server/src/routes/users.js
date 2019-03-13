const express = require("express");
let router = express.Router();
const UserController = require("../app/http/controllers/UsersController");

router.get("/", UserController.getAll);
router.post("/store", UserController.create);
router.get("/current-user", UserController.getCurrentUser);

module.exports = router;
