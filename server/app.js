const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const db = require("./db");

// const productsRoute = require("./routes/products");
// const authRoute = require("./routes/auth");

// const verifyToken = require("./middleware/verifyToken");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use("/products", productsRoute);
// app.use("/auth", authRoute);

// app.get("/check-role/:userId", verifyToken, (req, res) => {
//   if (req.user.userId == req.params.userId) {
//     res.status(200).json(req.user);
//   } else {
//     res.status(200).json("You do not have access");
//   }
// }),
app.listen(3000, () => console.log("App listening on port 3000!"));
