const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const Payment = require("../models/Payments");
const app = express();
import validateToken from "../validateToken.js";

app.use(cors());
app.use(bodyParser.json());

app.get("/delivery", async (req, res) => {
  res.json({ data: Date.now() });
});
