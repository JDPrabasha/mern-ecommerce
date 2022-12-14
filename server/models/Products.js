const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  sellerID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  seller: {
    type: String,
  },
  image: { type: String, required: true },
  stock: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Products", productsSchema);
