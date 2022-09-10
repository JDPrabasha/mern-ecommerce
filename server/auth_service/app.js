const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//test
app.get("/", (req, res) => {
  res.status(200).send("Auth Service");
});

app.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  res.json(newUser);
  const savedUser = await newUser.save();
  return res.send(savedUser);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email, password: password });
  if (!user) return res.status(400).send("Invalid username or password");
  const token = jwt.sign({ userId: user.id, role: user.role }, "mysecretkey", {
    expiresIn: "1h",
  });
  res.send({ token, user });
});

app.listen(3001, () => console.log("Connected to Auth Service on port 3001!"));
