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

app.get("/products", (req, res) => {
  try {
    Product.find({}, (err, products) => {
      if (err) res.status(500).end(err);
      else res.send(products);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/product/:id", async (req, res) => {
  const target = await Product.find({ _id: req.params.id });
  return res.send(target);
});

app.listen(3002, () => console.log("Connected to Buyer Service on port 3002!"));
