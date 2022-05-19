const http = require("http");
const hostname = "127.0.0.1";
const port = 4000;
const express = require("express");
const app = express();
const bodyparser = require('body-parser');
require("dotenv").config();
const crudRoute = require('./utilisateurs/utilisateurs.routes');
const db = require("./db");

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