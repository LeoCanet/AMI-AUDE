const router = require("express").Router();
const userController = require("../utilisateurs/utilisateurs.controller");

router.get("/", userController.list);


module.exports = router;