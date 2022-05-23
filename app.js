const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');
require("dotenv").config();
const db = require("./db");

app.use(bodyparser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// const crudRoute = require('./utilisateurs/utilisateurs.routes');
// app.use('/', crudRoute);
// Récupère les fichiers angular dans le dossier static
app.use(express.static('static'));

const hostname = "127.0.0.1";
const port = 4002;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});