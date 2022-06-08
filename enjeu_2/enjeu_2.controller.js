const Users2 = require("../enjeu_2/enjeu_2.model");

// Réupère tous les Utilisateurs
exports.findAll2 = (req, res) => {
  Users2.findAll2((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  });
};

// Create un utilisateur
exports.addUser2 = (req, res) => {
  let Referent_RSA = req.body.Referent_RSA;
  let Date_debut = req.body.Date_debut;
  let Date_fin = req.body.Date_fin;
  let Usagers = req.body.Usagers;
  let Intitule_Action = req.body.Intitule_Action;
  Users2.addUser2(
    (err, data) => {
      console.log(err);
      if (err)
        res.status(500).send({
          message: err.message || "Une erreur est survenue",
        });
      else res.send(data);
    },
    Referent_RSA,
    Date_debut,
    Date_fin,
    Usagers,
    Intitule_Action
  );
};

// Read un utilisateur
exports.findOne2 = (req, res) => {
  let user_id = req.params.id;
  Users2.findOne2((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  }, user_id);
};

// Update un utilisateur
exports.update2 = (req, res) => {
  let user_id = req.params.id;
  let Referent_RSA = req.body.Referent_RSA;
  let Date_debut = req.body.Date_debut;
  let Date_fin = req.body.Date_fin;
  let Usagers = req.body.Usagers;
  let Intitule_Action = req.body.Intitule_Action;
  Users2.update2(
    (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Une erreur est survenue",
        });
      else res.send(data);
    },
    user_id,
    Referent_RSA,
    Date_debut,
    Date_fin,
    Usagers,
    Intitule_Action
  );
};

// Delete un utilisateur
exports.delete2 = (req, res) => {
  let user_id = req.params.id;
  Users2.delete2((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  }, user_id);
};
