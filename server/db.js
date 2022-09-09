const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://ESB_MW:ia6J4ogjawR6vlDB@cluster0.3fm9odo.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connected to mongodb");
});

module.exports = db;
