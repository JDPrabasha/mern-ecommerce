const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Order = require("../models/Orders");
const Product = require("../models/Products");
const Payment = require("../models/Payments");
const app = express();
const auth = require("./auth");

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
  try {
    let orderIDs = [];
    await req.body.forEach((element) => {
      const newOrder = new Order(element);
      newOrder.save(function (err, savedOrder) {
        if (err) {
          console.log(err);
        } else {
          console.log(savedOrder._id);
          orderIDs.push(savedOrder._id);
          console.log(orderIDs);
          return res.status(201).json({ orders: orderIDs }).end();
        }
      });
    });
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
    order.deliveryDate = req.body.date;
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

app.put("/order/activate/:id", async (req, res) => {
  let paymentId = req.params.id;
  // take in  payment id
  //find orders related to id
  //update status of each order to "Pending"
  let response = [];
  Payment.findById(paymentId)
    .populate("orders")
    .exec((err, payment) => {
      let orderIds = [];
      payment.orders.map((order) => orderIds.push(order._id.toString()));
      console.log(orderIds);
      orderIds.map((id) => {
        Order.findById(id, (err, order) => {
          order.status = "Pending";
          order.save();
        });
      });

      if (err) console.log(err);
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
