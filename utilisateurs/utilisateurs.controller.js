const Users = require("../utilisateurs/utilisateurs.model");

// Réupère tous les Utilisateurs
exports.findAll = (req, res) => {
  Users.findAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  });
};

// Create un utilisateur
exports.addUser = (req, res) => {
  let Referent_RSA = req.body.Referent_RSA;
  let Date_debut = req.body.Date_debut;
  let Date_fin = req.body.Date_fin;
  let Usagers = req.body.Usagers;
  let Intitule_Action = req.body.Intitule_Action;
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }
  Users.addUser(
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
exports.findOne = (req, res) => {
  let user_id = req.params.id;
  Users.findOne((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  }, user_id);
};

// Update un utilisateur
exports.update = (req, res) => {
  let user_id = req.params.id;
  let Referent_RSA = req.body.Referent_RSA;
  let Date_debut = req.body.Date_debut;
  let Date_fin = req.body.Date_fin;
  let Usagers = req.body.Usagers;
  let Intitule_Action = req.body.Intitule_Action;
  Users.update(
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
exports.delete = (req, res) => {
  let user_id = req.params.id;
  Users.delete((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  }, user_id);
};
