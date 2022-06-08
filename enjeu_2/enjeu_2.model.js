const db = require("../db");

// Constructor des utilisateurs
const Users2 = function (
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

// Récupère tous les Users2
Users2.findAll2 = (result) => {
  db.query(`SELECT Enjeu_2.id, Referent_RSA, Date_debut, Usagers, Usagers.Nom, Usagers.Prenom, Intitule_Action, Date_fin FROM Enjeu_2 INNER JOIN Usagers ON Enjeu_2.usagers = Usagers.id`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

// Create un utilisateur
Users2.addUser2 = (
  result,
  Referent_RSA,
  Date_debut,
  Date_fin,
  Usagers,
  Intitule_Action
) => {
  db.query(
    `INSERT INTO Enjeu_2 (id, Referent_RSA, Date_debut, Date_fin, Usagers, Intitule_Action) VALUES (NULL, '${Referent_RSA}', '${Date_debut}', '${Date_fin}', '${Usagers}', '${Intitule_Action}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      // console.log("Users2: ", res);
      result(null, res);
    }
  );
};

// Read un utilisateur
Users2.findOne2 = (result, id) => {
  db.query(`SELECT * FROM Enjeu_2 where id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("Users2: ", res);
    result(null, res);
  });
};

// Update un utilisateur
Users2.update2 = (
  result,
  id,
  Referent_RSA,
  Date_debut,
  Date_fin,
  Usagers,
  Intitule_Action
) => {
  db.query(
    `UPDATE Enjeu_2 SET Referent_RSA = '${Referent_RSA}', Date_debut = '${Date_debut}', Date_fin = '${Date_fin}', Usagers = '${Usagers}', Intitule_Action = '${Intitule_Action}' WHERE Enjeu_2.id = ${id};`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      // console.log("Users2: ", res);
      result(null, res);
    }
  );
};

// Delete un utilisateur
Users2.delete2 = (result, id) => {
  db.query(`DELETE FROM Enjeu_2 WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("Users2: ", res);
    result(null, res);
  });
};

module.exports = Users2;
