const router = require("express").Router();
const UsersController = require("../utilisateurs/utilisateurs.controller");

router.get("/", UsersController.findAll);

module.exports = router;