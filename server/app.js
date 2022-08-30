const express = require("express");

var mongoose = require("mongoose");

const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");

const cors = require("cors");
//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/ecommerce";
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connected to mongodb");
});

const users = [
  {
    id: "1",
    username: "john",
    password: "John0908",
    isAdmin: true,
  },
  {
    id: "2",
    username: "jane",
    password: "Jane0908",
    isAdmin: false,
  },
];

const app = express();

app.use(cors());
app.use(bodyParser.json());

const productsRoute = require("./routes/products");
app.use("/products", productsRoute);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) return res.status(400).send("Invalid username or password");
  const token = jwt.sign(
    { userId: user.id, isAdmin: user.isAdmin },
    "mysecretkey",
    { expiresIn: "1h" }
  );
  res.send({ token, user });
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).json("You are not authenticated");
  jwt.verify(token, "mysecretkey", (err, user) => {
    if (err) return res.status(403).json("Token is invalid");
    req.user = user;
    next();
  });
};

app.get("/check-role/:userId", verifyToken, (req, res) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("You have access");
  } else {
    res.status(200).json("You do not have access");
  }
}),
  app.listen(3000, () => console.log("Example app listening on port 3000!"));
