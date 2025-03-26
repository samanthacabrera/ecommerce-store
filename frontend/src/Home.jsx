import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import Mission from "./Mission.jsx";
import EtsyStore from "./EtsyStore.jsx";
import Support from "./Support.jsx";
import Medium from "./Medium.jsx";
import Contact from "./Contact.jsx";

const Home = ({products}) => {
    return (
        <div className="flex flex-col items-center space-y-80 p-2 lg:p-12">
            <Hero/>
            <div>
                <h2 className="text-4xl text-center italic mb-24">Our Collection</h2>
                {products.length > 0 ? (
                    products.map((product) => (
                        <Link key={product._id} to={`/product/${product._id}`}>
                            <div className="group border p-4 my-12 hover:scale-105 transition duration-300 ease-in-out">
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="absolute left-full -top-12 mx-12 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow"
                                />
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading products...</p>
                )}
            </div>
            <Mission />
            <Support />
            <EtsyStore />
            <Medium />
            <Contact />
        </div>
    );
};

export default Home;
