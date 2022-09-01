const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).json("You are not authenticated");
  jwt.verify(token, "mysecretkey", (err, user) => {
    if (err) return res.status(403).json("Token is invalid");
    req.user = user;
    console.log(user);
    next();
  });
};

module.exports = verifyToken;
