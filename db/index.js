const mysql = require("mysql2");
const Promise = require("bluebird");

const connection = mysql.createConnection({
  database: "music",
  user: "root",
  password: "",
  host: "127.0.0.1",
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(function () {
    console.log("Connected Successfully to Music DB");
  })
  .catch(function (err) {
    console.log("Database Error", err);
  });

module.exports = db;
