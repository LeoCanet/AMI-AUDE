const mysql = require("mysql");

const connexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_BDD,
  });
  
  connexion.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("Vous êtes connecté à la BDD");
  });

module.exports = connexion;