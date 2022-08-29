const express = require("express");
const router = express.Router();
const product = require("../models/Products");

router.get("/", async (req, res) => {
  const products = await product.find();
  return res.send(products);
});

router.post("/", async (req, res) => {
  const newProduct = new product(req.body);
  res.json(newProduct);
  const savedQuote = await newProduct.save();
  return res.send(savedQuote);
});

module.exports = router;
