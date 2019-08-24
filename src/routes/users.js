const express = require("express");
let router = express.Router();
const authenticate = require("../app/http/middlewares/authenticate");
const UsersController = require("../app/http/controllers/UsersController");

router.get("/", authenticate, UsersController.getAll);
router.post("/store", UsersController.create);
router.get("/:id", UsersController.show);

module.exports = router;
