// Importaciones
const express = require("express");
const app = express();
// const mysql = require("mysql2");
// const router = express.Router();

const db = require("./config/database.js");

app.use("/products", require("./routes/products"));
// app.use("/categories", require("./routes/categories"));
// app.use("/productscategories", require("./routes/productscategories"));

// middleware
app.use(express.json());

// Creación de base de datos
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE eshop";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);

    res.send("Database created...");
  });
});

// Ejercicio 1
// Tabla productos
app.get("/createproductstable", (req, res) => {
  let createProductsTable = `CREATE TABLE products(
id INT AUTO_INCREMENT,
name VARCHAR(50),
price INT,
PRIMARY KEY(id)
)`;

  db.query(createProductsTable, (err, result) => {
    if (err) throw err;
    console.log(result);

    res.send("Table products created...");
  });
});

// Tabla categorias
app.get("/createcategoriestable", (req, res) => {
  let createCategoriesTable = `CREATE TABLE categories(
id INT AUTO_INCREMENT,
name VARCHAR(50),
department VARCHAR(50),
PRIMARY KEY(id)
)`;

  db.query(createCategoriesTable, (err, result) => {
    if (err) throw err;
    console.log(result);

    res.send("Table categories created...");
  });
});

// Tabla intermedia
app.get("/createproductscategoriestable", (req, res) => {
  let productscategories = `CREATE TABLE productscategories(
id INT AUTO_INCREMENT,
product_id INT,
category_id INT,
PRIMARY KEY(id),
FOREIGN KEY(product_id) REFERENCES eshop.products(id),
FOREIGN KEY(category_id) REFERENCES eshop.categories(id)
)`;

  db.query(productscategories, (err, result) => {
    if (err) throw err;
    console.log(result);

    res.send("Table relational created...");
  });
});
// Fin Ejercicio1

// Puerto
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
