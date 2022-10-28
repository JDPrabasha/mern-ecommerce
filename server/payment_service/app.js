const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Payment = require("../models/Payments");
const app = express();
const auth = require("./auth");

app.use(cors());
app.use(bodyParser.json());

app.post("/payment", auth, async (req, res) => {
  try {
    const newPayment = new Payment({
      user: req.body.user,
      paymentMethod: req.body.method,
      orders: req.body.orders,
      amount: req.body.paymentDetails.amount,
      address: req.body.address,
    });
    await newPayment.save(function (err, payment) {
      if (err) {
        console.log(err);
      } else {
        console.log(payment._id);
        return res
          .status(200)
          .json({ message: "Payment Successful", paymentID: payment._id })
          .end();
      }
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.listen(3011, () =>
  console.log("Connected to Payment Service on port 3011!")
);
