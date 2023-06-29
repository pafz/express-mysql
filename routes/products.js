// Importación
const express = require("express");
const db = require("../config/database.js");
const router = express.Router();

// middleware
const bodyParser = require("body-parser");

// EJERCICIO2
// Forma A
// router.post("/newproduct",bodyParser.json(), (req, res) => {
//   let sql = `INSERT INTO products (name, price) VALUES ("${req.body.name}", "${req.body.price}")`;

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Product added...");
//   });
// });

// Forma B
router.post("/newproduct", bodyParser.json(), (req, res) => {
  let product = { name: req.body.name, price: req.body.price };
  let sql = `INSERT INTO products SET ?`;

  db.query(sql, product, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Product added...");
  });
});
// FIN EJERCICIO 2

// EJERCICIO 3
router.put("/updateproduct/:id", bodyParser.json(), (req, res) => {
  let sql = `UPDATE products SET name = '${req.body.name}', price = "${req.body.price}" WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Product updated...");
  });
});
// FIN EJERCICIO 3

// EJERCICIO 4
router.get("/showallproducts", (req, res) => {
  let sql = `SELECT * FROM products`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/showproductbyid/:id", (req, res) => {
  let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/showproductsdesc", (req, res) => {
  let sql = `SELECT * FROM products ORDER BY price DESC`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/showproductbyname/:name", (req, res) => {
  let sql = `SELECT * FROM products WHERE name = '${req.params.name}'`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.delete("/deleteproductbyid/:id", (req, res) => {
  let sql = `ALTER TABLE productscategories DROP FOREIGN KEY productscategories_ibfk_1;`;

  sql = `DELETE FROM products WHERE id = 2;`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
// FIN EJERCICIO 4

// Exportar
module.exports = router;
