const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
    maxlength: [100, "Name can not be more than 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please provide product name"],
  },
  description: {
    type: String,
    required: [true, "Please provide product description"],
    maxlength: [1000, "description can not be more than 1000 characters"],
  },
  image: {
    type: String,
    default: "/uploads/example.jpeg",
  },
  category: {
    type: String,
    required: [true, "Please provide product category"],
    enum: ["living room", "dinning", "bedroom", "office", "kids", "kitchen"],
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "marcos", "caressa"],
      message: "{VALUE} is not supported",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  reviews: {
    type: String,
    default: 4.5,
  },
});

module.exports = mongoose.model("Product", productSchema);
