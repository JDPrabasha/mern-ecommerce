const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Payment = require("../models/Payments");
const app = express();
const auth = require("./auth");

app.use(cors());
app.use(bodyParser.json());

app.post("/delivery/:id", async (req, res) => {
  res.json({ date: Date.now(), message: "Order is ready for dispatch" });
});

app.listen(3008, () =>
  console.log("Connected to Delivery Service on port 3008!")
);
