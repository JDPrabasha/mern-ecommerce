const express = require("express");

var mongoose = require("mongoose");

const bodyParser = require("body-parser");
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

const app = express();
app.use(bodyParser.json());

const productsRoute = require("./routes/products");
app.use("/products", productsRoute);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
