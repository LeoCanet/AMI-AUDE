const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
require("dotenv").config();
const db = require("./db");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const crudRoute = require("./utilisateurs/utilisateurs.routes");
app.use("/", crudRoute);

const hostname = "127.0.0.1";
const port = 4002;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
