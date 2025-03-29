import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import Mission from "./Mission.jsx";
import Promise from "./Promise.jsx";
import Support from "./Support.jsx";
import Medium from "./Medium.jsx";
import Contact from "./Contact.jsx";


const Collection = ({ products }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        <h2 className="text-4xl italic my-12">
          Our Collection
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {products.length > 0 ? (
            products.map((product) => (
              <div 
                key={product._id} 
                className="perspective-1000"
              >
                <Link to={`/product/${product._id}`} className="block">
                  <div className="
                    relative 
                    bg-white/5 
                    backdrop-blur-md 
                    rounded-xl 
                    border 
                    border-white/10 
                    overflow-hidden 
                    transform 
                    transition-all 
                    duration-500 
                    hover:scale-[101%] 
                    hover:shadow- 
                    group
                  ">
                    <div className="p-6 relative z-10">
                      <div className="flex flex-grow justify-between items-center mb-6">
                        <h3 className="text-lg text-white/80">
                          {product.name}
                        </h3>
                        <span className="text-lg text-white/80">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="relative z-20 mt-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="
                            w-full 
                            aspect-square 
                            object-cover 
                            rounded-xl 
                            opacity-80
                            group-hover:opacity-90 
                            transition-all 
                            duration-500 
                            transform 
                            group-hover:scale-[101%]
                          "
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-white/70 text-lg animate-pulse">
                loading...
              </p>
            </div>
          )}
        </div>
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
        { component: <Promise />, bgColor: "bg-[#B04A33]" },
        { component: <Support />, bgColor: "bg-[#8A9A7B]" },
        // { component: <Medium />, bgColor: "bg-[#8A9A7B]" },
        { component: <Contact />, bgColor: "bg-none" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-screen h-screen overflow-y-scroll lg:scroll-smooth lg:snap-y lg:snap-mandatory">
                {sections.map(({ component, bgColor }, index) => (
                    // <Section key={index} bgColor={bgColor}>
                    <Section key={index} bgColor="bg-none">
                        {component}
                    </Section>
                ))}
            </div>
        </div>
    );
};

export default Home;
