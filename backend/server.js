const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Stripe = require("stripe");
require("dotenv").config();

// set up middleware
const app = express();
app.use(express.json()); // allows app to read JSON data
app.use(cors()); // lets frontend talk to backend

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// set up Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// test route
app.get("/", (req, res) => res.send("Welcome to the backend!"));

// fetch all products route
const productRoutes = require("./routes/ProductRoutes");
app.use("/api/products", productRoutes);

// stripe checkout session route
app.post("/create-checkout-session", async (req, res) => {
    try {
        const { cartItems } = req.body; // get cart items from frontend

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: cartItems.map((item) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                        images: [item.image],
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            })),
            success_url: "http://localhost:5173/confirmation", // redirect after success
            cancel_url: "http://localhost:5173/cart", // redirect if canceled
        });

        res.json({ url: session.url }); // send Stripe session URL to frontend
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


