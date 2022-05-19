
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

