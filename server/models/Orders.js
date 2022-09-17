const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  products: [
    {
      item: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Products",
      },
      quantity: Number,
      price: Number,
    },
  ],
  status: {
    type: String,
    default: "Inactive",
  },
  seller: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Orders", ordersSchema);
