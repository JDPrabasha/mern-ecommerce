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
      id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Products",
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      quantity: Number,
      price: Number,
    },
  ],
  status: {
    type: String,
    default: "Pending",
  },
  seller: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  deliveryDate: {
    type: Date,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  deliveryAddress: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Orders", ordersSchema);
