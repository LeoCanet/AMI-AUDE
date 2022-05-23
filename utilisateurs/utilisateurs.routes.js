const router = require("express").Router();
const UsersController = require("../utilisateurs/utilisateurs.controller");

router.get("/utilisateurs", UsersController.findAll);

router.delete("/utilisateurs-delete", UsersController.delete);

router.put("/utilisateurs-update", UsersController.update);

router.get("/utilisateurs/:id", UsersController.findOne);

router.post("/utilisateurs-add", UsersController.addUser);

module.exports = router;