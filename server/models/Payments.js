const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobilePaymentSchema = new Schema({
  provider: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
});

const paymentsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  amount: { type: Number, required: true },
  paymentMethod: {
    type: String,
    required: true,
  },
  mobilePayment: {
    type: mobilePaymentSchema,
    required: false,
  },
  order: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Orders",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Payments", paymentsSchema);
