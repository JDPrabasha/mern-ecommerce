const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Payment = require("../models/Payments");
const app = express();
const auth = require("./auth");
app.use(cors());
app.use(bodyParser.json());

app.post("/notify", async (req, res) => {
  //take in array of order ids as request
  //for each order, find seller name
  //console.log("Order successfully placed/n" + "Order ID: " id + "Seller": seller name);
  //for each order
});

app.listen(3012, () =>
  console.log("Connected to Notification Service on port 3012!")
);
