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
        inventory: { light: 2, dark: 1, multi: 1 },
        image: "/strap.webp",
        material: "100% Cotton",
        saved: 4,
        description: "Our hand-crocheted yoga mat strap made entirely from upcycled 100% cotton textiles."
    },
    {
        name: "Yoga Mat Carrier",
        price: 99.99,
        inventory: { light: 1, dark: 0, multi: 0 },
        image: "/carrier.avif",
        material: "60% Cotton, 40% Polyester",
        saved: 9,
        description: "Our hand-crocheted yoga mat carrier is made from 100% upcycled cotton-polyester blends."
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
