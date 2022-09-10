const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Product = require("../models/Products");
const db = require("../db");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Buyer Service");
});

app.get("/product", (req, res) => {
  try {
    Product.find({}, (err, products) => {
      if (err) res.status(500).end(err);
      else res.send(products);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3002, () => console.log("Connected to Buyer Service on port 3002!"));
