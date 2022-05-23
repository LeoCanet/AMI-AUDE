const db = require("../db");

// Constructor des utilisateurs
const Users = function (id, nom, prenom, dateDeNaissance, email) {
  this.id = id;
  this.nom = nom;
  this.prenom = prenom;
  this.dateDeNaissance = dateDeNaissance;
  this.email = email;
};

// Récupère tous les Users
Users.findAll = (result) => {
  db.query(`SELECT * FROM Utilisateurs`, (err, res) => {
    // if (!user_id) {res.400}
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Users: ", res);
    result(null, res);
  });
};

// Create un utilisateur
Users.create = (result, nom, prenom, dateNaissance, email) => {
  db.query(
    `INSERT INTO Utilisateurs (id, Nom, Prenom, Date_de_naissance, Email) VALUES (NULL, ${nom}, ${prenom}, ${dateNaissance}, ${email})`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("Users: ", res);
      result(null, res);
    }
  );
};

// Read un utilisateur
Users.findOne = (result, id) => {
  console.log("result: ", id);
  db.query(`SELECT * FROM Utilisateurs where id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Users: ", res);
    result(null, res);
  });
};

// Update un utilisateur
Users.update = (result, id, nom) => {
  db.query(
    `UPDATE Utilisateurs SET Nom = ${nom} WHERE id ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("Users: ", res);
      result(null, res);
    }
  );
};

// Delete un utilisateur
Users.delete = (result, id) => {
  console.log("result: ", id);
  db.query(`DELETE FROM Utilisateurs WHERE id = ${id}`, (err, res) => {
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
