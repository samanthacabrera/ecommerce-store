const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    inventory: Object,
    image: String,
    material: String,
    saved: Number,
    description: String
});

module.exports = mongoose.model("Product", productSchema);
