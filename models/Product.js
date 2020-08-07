const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: {
      type: String,
      minlength: 1,
      maxlength: 255,
      required: true
    },
    price: {
      type: Number,
      min: 0.01,
      required: true
    },
    description: {
      type: String,
      minlength: 2,
      maxlength: 1055,
      required: true
    }
  })
);

const validateProduct = product => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(255).required(),
    price: Joi.number().min(0.01).required(),
    description: Joi.string().min(2).max(1055).required()
  });

  return schema.validate(product);
};

exports.validate = validateProduct;
exports.Product = Product;
