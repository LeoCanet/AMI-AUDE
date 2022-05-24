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
  let user_nom = req.body.nom;
  let user_prenom = req.body.prenom;
  let user_birth = req.body.dateNaissance;
  let user_mail = req.body.email;
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
    user_nom,
    user_prenom,
    user_birth,
    user_mail
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
  let user_id = req.body.id;
  let user_nom = req.body.nom;
  Users.update(
    (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Une erreur est survenue",
        });
      else res.send(data);
    },
    user_id,
    user_nom
  );
};

// Delete un utilisateur
exports.delete = (req, res) => {
  let user_id = req.body.id;
  Users.delete((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue",
      });
    else res.send(data);
  }, user_id);
};
