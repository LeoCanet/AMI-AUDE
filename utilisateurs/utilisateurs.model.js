const db = require("../db");

// Constructor des utilisateurs
const Users = function (
  id,
  Referent_RSA,
  Date_debut,
  Date_fin,
  Usagers,
  Intitule_Action
) {
  this.id = id;
  this.Referent_RSA = Referent_RSA;
  this.Date_debut = Date_debut;
  this.Date_fin = Date_fin;
  this.Usagers = Usagers;
  this.Intitule_Action = Intitule_Action;
};

// Récupère tous les Users
Users.findAll = (result) => {
  db.query(`SELECT * FROM Enjeu_1`, (err, res) => {
    // if (!user_id) {res.400}
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("Users: ", res);
    result(null, res);
  });
};

// Create un utilisateur
Users.addUser = (
  result,
  Referent_RSA,
  Date_debut,
  Date_fin,
  Usagers,
  Intitule_Action
) => {
  db.query(
    `INSERT INTO Enjeu_1 (id, Referent_RSA, Date_debut, Date_fin, Usagers, Intitule_Action) VALUES (NULL, '${Referent_RSA}', '${Date_debut}', '${Date_fin}', '${Usagers}', '${Intitule_Action}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      // console.log("Users: ", res);
      result(null, res);
    }
  );
};

// Read un utilisateur
Users.findOne = (result, id) => {
  db.query(`SELECT * FROM Enjeu_1 where id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("Users: ", res);
    result(null, res);
  });
};

// Update un utilisateur
Users.update = (
  result,
  id,
  Referent_RSA,
  Date_debut,
  Date_fin,
  Usagers,
  Intitule_Action
) => {
  db.query(
    `UPDATE Enjeu_1 SET Referent_RSA = '${Referent_RSA}', Date_debut = '${Date_debut}', Date_fin = '${Date_fin}', Usagers = '${Usagers}', Intitule_Action = '${Intitule_Action}' WHERE Enjeu_1.id = ${id};`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      // console.log("Users: ", res);
      result(null, res);
    }
  );
};

// Delete un utilisateur
Users.delete = (result, id) => {
  db.query(`DELETE FROM Enjeu_1 WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("Users: ", res);
    result(null, res);
  });
};

module.exports = Users;
