import { Link } from "react-router-dom";
import products from "./products.js";
import Hero from "./Hero.jsx";
import Mission from "./Mission.jsx";
import Process from "./Process.jsx";
import Policies from "./Policies.jsx";
import EtsyStore from "./EtsyStore.jsx";
import Support from "./Support.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
    return (
        <div className="flex flex-col items-center space-y-80 p-12">
            <Hero/>
            <div>
                <h3 className="text-4xl text-center italic mb-24">Our Collection</h3>
                {products.map((product) => (
                 <Link key={product.id} to={`/product/${product.id}`}>
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
                ))}
            </div>
            <Mission />
            <Process />
            <EtsyStore />
            <Support />
            <Policies />
            <Contact />
        </div>
    )
}

export default Home;