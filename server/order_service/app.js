const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Order = require("../models/Orders");
const app = express();
import validateToken from "../validateToken.js";

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.status(200).send("Order Service");
});

app.post("/order", validateToken, async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    return res.status(201).end();
  } catch (err) {
    return res.status(500);
  }
});

app.get("/order/:id", validateToken, (req, res) => {
  let id = req.params.id;
  Order.findById(id, (err, order) => {
    res.json(order);
  });
});

app.get("/order/buyer/:id", validateToken, (req, res) => {
  let buyerId = req.params.id;
  try {
    Order.find({ user: buyerId }, (err, orders) => {
      if (err) res.status(500).end();
      else res.json(orders);
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3004, () => console.log("Connected to Order Service on port 3004!"));
