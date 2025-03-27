import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import Mission from "./Mission.jsx";
import EtsyStore from "./EtsyStore.jsx";
import Support from "./Support.jsx";
import Medium from "./Medium.jsx";
import Contact from "./Contact.jsx";

const Collection = ({ products }) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-4xl text-center italic mb-24">Our Collection</h2>
            <div className="flex flex-col items-center w-full">
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
        </div>
    );
};

const Section = ({ children, bgColor }) => (
    <div className={`flex justify-center items-center min-h-screen lg:h-screen lg:snap-start ${bgColor}`}>
        {children}
    </div>
);

const Home = ({ products }) => {
    const sections = [
        { component: <Hero />, bgColor: "bg-none" },
        { component: <Collection products={products} />, bgColor: "bg-[#C76E36]" },
        { component: <Mission />, bgColor: "bg-[#B04A33]" },
        { component: <Support />, bgColor: "bg-[#8A9A7B]" },
        { component: <EtsyStore />, bgColor: "bg-[#F5A623]" },
        { component: <Medium />, bgColor: "bg-[#B96C4D]" },
        { component: <Contact />, bgColor: "bg-none" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-screen h-screen overflow-y-scroll lg:scroll-smooth lg:snap-y lg:snap-mandatory">
                {sections.map(({ component, bgColor }, index) => (
                    <Section key={index} bgColor={bgColor}>
                        {component}
                    </Section>
                ))}
            </div>
        </div>
    );
};

export default Home;
