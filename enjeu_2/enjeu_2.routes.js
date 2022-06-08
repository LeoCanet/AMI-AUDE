const router = require("express").Router();
const Enjeu_2_Controller = require("../enjeu_2/enjeu_2.controller");

router.get("/enjeu2", Enjeu_2_Controller.findAll2);

router.delete("/enjeu2-delete/:id", Enjeu_2_Controller.delete2);

router.put("/enjeu2-update/:id", Enjeu_2_Controller.update2);

router.get("/enjeu2-find/:id", Enjeu_2_Controller.findOne2);

router.post("/enjeu2", Enjeu_2_Controller.addUser2);

module.exports = router;