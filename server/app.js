const express = require("express");

var mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require("cors");
//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/ecommerce";

const productsRoute = require("./routes/products");
const authRoute = require("./routes/auth");

const verifyToken = require("./middleware/verifyToken");
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connected to mongodb");
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/products", productsRoute);
app.use("/auth", authRoute);

app.get("/check-role/:userId", verifyToken, (req, res) => {
  if (req.user.userId == req.params.userId) {
    res.status(200).json(req.user);
  } else {
    res.status(200).json("You do not have access");
  }
}),
  app.listen(3000, () => console.log("App listening on port 3000!"));
