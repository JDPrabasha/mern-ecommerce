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
  //take in array of order ids as request
  //for each order, find seller name
  //console.log("Order successfully placed/n" + "Order ID: " id + "Seller": seller name);
  //for each order
  let response = [];
  let orderIds = [...req.body.orders];
  Order.find({
    _id: { $in: [...orderIds] },
  })
    .populate("seller")
    .exec((err, orderSellers) => {
      orderSellers.map((item) => {
        console.log(
          "Order successfully placed " +
            "Order ID: " +
            item._id +
            " Seller: " +
            item.seller.name
        );
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
