const router = require("express").Router();
const UsersController = require("../utilisateurs/utilisateurs.controller");

router.get("/utilisateurs", UsersController.findAll);

router.delete("/utilisateurs-delete/:id", UsersController.delete);

router.put("/utilisateurs-update/:id", UsersController.update);

router.get("/utilisateurs/:id", UsersController.findOne);

router.post("/utilisateurs", UsersController.addUser);

module.exports = router;