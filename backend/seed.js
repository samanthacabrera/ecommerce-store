const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

// load environment vars
dotenv.config();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
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
    },
    {
        name: "Upcycled T-Shirt Yarn",
        price: 49.99,
        inventory: 3,
        image: "/tarn.webp",
        description: "Our t-shirt yarn made from 100% upcycled cotton, perfect for your next sustainable craft project."
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
