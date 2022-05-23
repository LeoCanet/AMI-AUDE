
const Users = require("../utilisateurs/utilisateurs.model");

// Réupère tous les Utilisateurs
exports.findAll = (req, res) => {  
    Users.findAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue"
        });
      else res.send(data);
    });
  };

// Create un utilisateur
exports.create = (req, res) => {
  let user_nom = req.body.Nom;
  let user_prenom = req.body.Prenom;
  let user_birth = req.body.Date_de_naissance;
  let user_mail = req.body.Email;
  Users.create((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue"
      });
    else res.send(data);
  })(user_nom, user_prenom, user_birth, user_mail);
};

// Read un utilisateur
exports.findOne = (req, res) => {
  let user_id = req.params.id;
  console.log("test:", user_id)
  Users.findOne((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue"
      });
    else res.send(data);
  },(user_id))

};

// Update un utilisateur
exports.update = (req, res) => {
  let user_id = req.body.id;
  let user_nom = req.body.Nom;
  Users.update((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue"
      });
    else res.send(data);
  },(user_id, user_nom));
};

// Delete un utilisateur
exports.delete = (req, res) => {
  let user_id = req.body.id;
  console.log("test:", user_id)
  Users.delete((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue"
      });
    else res.send(data);
  },(user_id));
};