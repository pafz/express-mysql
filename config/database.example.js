const express = require("express");
const app = express();

const mysql = require("mysql2");

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "Your user",
  password: "Your password",
});

db.connect();

module.exports = db;
