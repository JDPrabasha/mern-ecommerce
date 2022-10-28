const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Payment = require("../models/Payments");
const Order = require("../models/Orders");
const Seller = require("../models/Users");
const app = express();
const auth = require("./auth");

app.use(cors());
app.use(bodyParser.json());

app.post("/notify", (req, res) => {
  let response = [];
  let orderIds = req.body;
  Order.find({
    _id: { $in: [...orderIds] },
  })
    .populate("seller")
    .exec((err, orderSellers) => {
      orderSellers.map((item) => {
        response.push({
          order: item._id,
          seller: item.seller.name,
        });
      });
      if (err) console.log(err);
      res.json(response);
    });
});

app.listen(3012, () =>
  console.log("Connected to Notification Service on port 3012!")
);
