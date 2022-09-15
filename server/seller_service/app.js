const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const jwt = require("jsonwebtoken");
const Product = require("../models/Products");
const { response } = require("express");
const Products = require("../models/Products");
import validateToken from "../validateToken.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.status(200).send("Order Service");
});

app.post("/product", validateToken, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).end();
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.get("/product/:id", validateToken, (req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, product) => {
    res.json(product);
  });
});
app.get("/product/seller/:id", validateToken, (req, res) => {
  let sellerId = req.params.id;
  try {
    Product.find({ sellerID: sellerId }, (err, products) => {
      if (err) res.status(500).end();
      else res.json(products);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/product/:id", validateToken, (req, res) => {
  let id = req.params.id;
  try {
    Product.findByIdAndUpdate(id, req.body, (err, docs) => {
      if (err) res.status(500).end();
      else res.status(204).end();
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/product/:id", validateToken, (req, res) => {
  let id = req.params.id;
  try {
    Product.findByIdAndDelete(id, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.send(200).end();
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3006, () =>
  console.log("Connected to Seller Service on port 3006!")
);
