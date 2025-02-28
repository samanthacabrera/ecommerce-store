const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up middleware
const app = express();
app.use(express.json()); // allows app to read JSON data
app.use(cors()); // lets frontend talk to backend

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// test route
app.get("/", (req, res) => res.send("Welcome to the backend!"));

const productRoutes = require("./routes/ProductRoutes");
app.use("/api/products", productRoutes);

// start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


