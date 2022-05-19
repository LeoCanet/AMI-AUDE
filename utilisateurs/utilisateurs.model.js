const db = require("../db");

// Constructeur des utilisateurs
const Users = function (users) {
    this.referent = users.referent;
    this.operateur = users.operateur;
    this.secteur = secteur.operateur;
    this.usagers = users.usagers;
    this.intitule = users.intitule;
    this.dateFin = users.dateFin;
}

Users.findAll = result => {
    db.query("SELECT * FROM Enjeu_1", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Users: ", res);
      result(null, res);
    }); 
  };

  module.exports = Users;