const express = require("express");
const router = express.Router();
const product = require("../models/Products");
var ObjectId = require("mongodb").ObjectId;

router.get("/", async (req, res) => {
  const products = await product.find();
  return res.send(products);
});

router.get("/product/:id", async (req, res) => {
  const target = await product.find({ _id: req.params.id });
  return res.send(target);
});

router.post("/", async (req, res) => {
  const newProduct = new product(req.body);
  res.json(newProduct);
  const savedQuote = await newProduct.save();
  return res.send(savedQuote);
});

module.exports = router;
