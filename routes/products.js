// Importación
const express = require("express");
const db = require("../config/database.js");
const router = express.Router();
const app = express();

// middleware
app.use(express.json());

// router.post("/newproduct", (req, res) => {
//   let sql = `INSERT INTO products (name, price) VALUES ("${req.body.name}", "${req.body.price}")`;

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Product added...");
//   });
// });

router.post("/newproduct", (req, res) => {
  //   let product = { name: req.body.name, price: req.body.price };
  let product = { name: req.body.name, price: req.body.price };
  let sql = `INSERT INTO products SET ?`;

  db.query(sql, product, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Product added...");
  });
});

// Exportar
module.exports = router;
