const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Buyer Service");
});

app.listen(3002, () => console.log("Connected to Buyer Service on port 3002!"));
