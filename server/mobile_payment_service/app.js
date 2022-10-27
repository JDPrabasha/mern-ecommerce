const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Payment = require("../models/Payments");
const app = express();
const auth = require("./auth");

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.status(200).send("Mobile Payment Service");
});
app.get("/payment/:id", (req, res) => {
  let id = req.params.id;
  Payment.find({ order: id }, (err, payment) => {
    res.json(payment);
  });
});

app.post("/mobile_payment", async (req, res) => {
  try {
    const newPayment = new Payment({
      user: req.body.user,
      paymentMethod: req.body.method,
      orders: req.body.orders,
      amount: req.body.paymentDetails.amount,
      address: req.body.address,
      mobile: req.body.paymentDetails.mobile,
    });
    await newPayment.save();
    return res.status(200).json({ message: "Payment Successful" }).end();
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post("/payment", async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    return res.status(200).end();
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.listen(3003, () =>
  console.log("Connected to Mobile Payment Service on port 3003!")
);
