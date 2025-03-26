const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Stripe = require("stripe");
require("dotenv").config();

// set up middleware
const app = express();
app.use(express.json()); // allows app to read JSON data
app.use(cors());// lets frontend talk to backend

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// set up Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// test route
app.get("/", (req, res) => res.send("Welcome to the backend!"));

// fetch all products route
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// send user messages to email
const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

// stripe checkout session route
app.post("/api/create-checkout-session", async (req, res) => {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
        console.error("Cart is empty or undefined");
        return res.status(400).json({ error: "Cart is empty" });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: cart.map(item => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            })),
            mode: "payment",
            success_url: "http://localhost:5173/",
            cancel_url: "http://localhost:5173/cart",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Stripe error:", error);
        res.status(500).json({ error: error.message });
    }
});


// start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


