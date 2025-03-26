const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// get all 
router.get("/", async (req, res) => {
    try {
        console.log("Attempting to fetch all products");
        const products = await Product.find();
        console.log("Products fetched successfully:", products.length);
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

// get by ID
router.get("/:id", async (req, res) => {
    try {
        console.log(`Attempting to fetch product with ID: ${req.params.id}`);
        const product = await Product.findById(req.params.id);

        if (!product) {
            console.log(`No product found with ID: ${req.params.id}`);
            return res.status(404).json({ message: "Product not found" });
        }

        console.log("Product found:", product);
        res.json(product);
    } catch (error) {
        console.error(`Error fetching product with ID ${req.params.id}:`, error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;