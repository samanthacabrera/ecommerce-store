const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

// load environment vars
dotenv.config();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// product data 
const products = [
    {
        name: "Yoga Mat Strap",
        price: 79.99,
        inventory: 1,
        image: "/strap.webp",
        description: "Our hand-crocheted yoga mat strap made entirely from upcycled 100% cotton textiles."
    }
];

// add products to db
const seedDB = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log("Database seeded successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// run the function
seedDB();
