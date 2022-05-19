const http = require("http");
const hostname = "127.0.0.1";
const port = 4000;
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyparser = require('body-parser');
require("dotenv").config();
const crudRoute = require('./utilisateurs/utilisateurs.routes');

app.use(bodyparser.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/', crudRoute);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

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

  console.log("Vous êtes connecté à la BDD avec ID " + connexion.threadId);
});
