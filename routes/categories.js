// Importación
const express = require("express");
const db = require("../config/database.js");
const router = express.Router();

// middleware
const bodyParser = require("body-parser");

// EJERCICIO2
router.post("/newcategory", bodyParser.json(), (req, res) => {
  let product = { name: req.body.name, department: req.body.department };
  let sql = `INSERT INTO categories SET ?`;

  db.query(sql, product, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Category added...");
  });
});
// FIN EJERCICIO 2

// EJERCICIO 3
router.put("/updatecategory/:id", bodyParser.json(),(req, res) => {
  let sql = `UPDATE categories SET name = '${req.body.name}', department = "${req.body.department}" WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send("Category updated...")
  })
});
// FIN EJERCICIO 3

// EJERCICIO 4
router.get("/showallcategories", (req, res) => {
  let sql = `SELECT * FROM categories`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/showcategorybyid/:id", (req, res) => {
  let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


// FIN EJERCICIO 4

// Exportar
module.exports = router;
