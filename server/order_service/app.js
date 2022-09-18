const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Order = require("../models/Orders");
const Product = require("../models/Products");
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.text({ limit: "200mb" }));
app.use(cors());
app.get("/", async (req, res) => {
  res.status(200).send("Order Service");
});

app.post("/order", async (req, res) => {
  console.log("ughghb");
  try {
    await req.body.forEach((element) => {
      const newOrder = new Order(element);
      newOrder.save();
    });
    return res.status(201).end();
  } catch (err) {
    return res.status(500);
  }
});

app.get("/order/:id", (req, res) => {
  let id = req.params.id;
  Order.findById(id, (err, order) => {
    res.json(order);
  });
});

app.put("/order/:id", (req, res) => {
  let id = req.params.id;
  Order.findById(id, (err, order) => {
    order.status = "Delivering";
    order.deliveryDate = Date.now();
    order.save();
    order.products.forEach((element) => {
      Product.findById(element.id, (err, product) => {
        product.stock -= element.quantity;
        product.save();
      });
    });
    res.status(204).end();
  });
});

app.get("/order/buyer/:id", (req, res) => {
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
