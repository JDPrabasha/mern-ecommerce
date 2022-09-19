const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const jwt = require("jsonwebtoken");
const Product = require("../models/Products");
const { response } = require("express");
const Products = require("../models/Products");
const auth = require("./auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.status(200).send("Seller Service");
});

app.post("/product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    return res.status(201).end();
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.get("/product/:id", (req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, product) => {
    res.json(product);
  });
});
app.get("/product/seller/:id", (req, res) => {
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

app.put("/product/:id", (req, res) => {
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

app.delete("/product/:id", (req, res) => {
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

app.get("/order/pending/:id", (req, res) => {
  let sellerId = req.params.id;
  Order.find({ seller: sellerId, status: "Pending" }, (err, orders) => {
    res.json(orders);
  });
});

app.get("/order/delivering/:id", (req, res) => {
  let sellerId = req.params.id;
  Order.find({ seller: sellerId, status: "Delivering" }, (err, orders) => {
    res.json(orders);
  });
});

app.listen(3006, () =>
  console.log("Connected to Seller Service on port 3006!")
);
