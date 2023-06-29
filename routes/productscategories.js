// Importación
const express = require("express");
const db = require("../config/database.js");
const router = express.Router();

// middleware
const bodyParser = require("body-parser");

// EJERCICIO 4
router.get("/showalleshop", (req, res) => {
  let sql = `SELECT products.name, categories.department FROM products INNER JOIN 
productscategories ON products.id = productscategories.id INNER JOIN 
categories ON categories.id = productscategories.category_id;`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
// FIN EJERCICIO 4

// Exportar
module.exports = router;

