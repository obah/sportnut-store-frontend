const { Schema, model, models } = require("mongoose");

const OrderSchema = new Schema(
  {
    line_items: Object,
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    street: String,
    zip: Number,
    paid: Boolean,
  },
  {
    timestamps: true,
  },
);

export const Order = models?.Order || model("Order", OrderSchema);
