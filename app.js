const http = require("http");
const hostname = "127.0.0.1";
const port = 4000;
require('dotenv').config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(process.env.DB_USER);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  port     : process.env.DB_PORT,
  database : process.env.DB_BDD
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('Vous êtes connecté à la BDD avec ID ' + connection.threadId);
});
