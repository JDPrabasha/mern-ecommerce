const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  res.json(newUser);
  const savedUser = await newUser.save();
  return res.send(savedUser);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email, password: password });
  if (!user) return res.status(400).send("Invalid username or password");
  const token = jwt.sign({ userId: user.id, role: user.role }, "mysecretkey", {
    expiresIn: "1h",
  });
  res.send({ token, user });
});

module.exports = router;
