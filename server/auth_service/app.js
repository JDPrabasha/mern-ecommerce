const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../db");
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());
app.use(bodyParser.json());

//test
app.get("/", (req, res) => {
  res.status(200).send("Auth Service");
});

app.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(
    req.body.password,
    "$2b$10$X4kv7j5ZcG39WgogSl16au"
  );
  const newUser = new User({
    ...req.body,
    password: hashedPassword,
  });
  res.json(newUser);
  const savedUser = await newUser.save();
  return res.send(savedUser);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(await bcrypt.hash(password, "$2b$10$X4kv7j5ZcG39WgogSl16au"));
  const user = await User.findOne({
    email: email,
    password: await bcrypt.hash(password, "$2b$10$X4kv7j5ZcG39WgogSl16au"),
  });
  console.log(user);
  if (!user) return res.status(400).send("Invalid username or password");
  const token = jwt.sign({ userId: user._id, role: user.role }, "mysecretkey", {
    expiresIn: "1h",
  });
  res.send({ token, user });
});

app.post("/verify", async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).json("You are not authenticated");
  jwt.verify(token, "mysecretkey", (err, user) => {
    if (err) return res.status(403).json("Token is invalid");
    req.user = user;
    console.log(user);
  });
});

app.listen(3001, () => console.log("Connected to Auth Service on port 3001!"));
