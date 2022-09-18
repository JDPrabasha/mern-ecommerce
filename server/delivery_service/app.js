const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Payment = require("../models/Payments");
const app = express();
const auth = require("./auth")

app.use(cors());
app.use(bodyParser.json());

app.get("/delivery", async (req, res) => {
  res.json({ date: Date.now() });
});
