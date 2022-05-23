const db = require("../db");

// Constructeur des utilisateurs
const Users = function (users) {
    this.referent = users.referent;
}

// Récupère tous les Users
Users.findAll = result => {
    db.query("SELECT * FROM Utilisateurs", (err, res) => {
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