const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "please provide product name"],
        maxlenght: [100, "name cannot be more than 100 characters"]
    },
    price: {
        type: Number,
        require: [true, "please provide product price"],
        default: 0
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    category: {
      type: String,
      required: [true, 'Please provide product category'],
    }
})

module.exports = mongoose.model("Product", ProductSchema)