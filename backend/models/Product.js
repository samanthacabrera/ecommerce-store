const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    inventory: {
        light: { type: Number, default: 0 },
        dark: { type: Number, default: 0 },
        multi: { type: Number, default: 0 }
    },
    image: { type: String, required: true },
    material: { type: String, required: true },
    saved: { type: Number, default: 0 },
    description: { type: String, required: true }
});

module.exports = mongoose.model("Product", productSchema);
