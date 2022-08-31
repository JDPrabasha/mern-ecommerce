const express = require("express");
const router = express.Router();
const user = require("../models/Users");

router.post("/register", async (req, res) => {
  const newUser = new user(req.body);
  res.json(newUser);
  const savedUser = await newUser.save();
  return res.send(savedUser);
});

// router.post("/login", async (req, res) => {
//   const user = await user.findOne({ email: req.body.email });
//   if (!user) return res.status(400).send("Email or password is wrong");
//   if (user.password !== req.body.password)
//     return res.status(400).send("Invalid password");
//   const token = user.generateAuthToken();
//   res.send(token);
// });

module.exports = router;
