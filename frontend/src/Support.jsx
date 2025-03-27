import React from 'react';
import { Megaphone, Star, Shirt, ShoppingBag } from 'lucide-react';

const SupportMethod = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl transition-all duration-300 hover:bg-white/20">
    <div className="bg-white/20 p-3 rounded-full">
      <Icon className="text-white w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  </div>
);

const Support = () => {
  const supportMethods = [
    {
      icon: Megaphone,
      title: "Spread the Word",
      description: "Tell your friends, family, and fellow yoga enthusiasts about our shop! A simple recommendation can help us grow and continue our mission."
    },
    {
      icon: Star,
      title: "Leave a Review",
      description: "If you've purchased from us before, leaving a review on Etsy helps others feel confident about supporting us!"
    },
    {
      icon: Shirt,
      title: "Donate Materials",
      description: "In the Denver area? Donate clean, gently used t-shirts for us to upcycle. Reach out via our contact form to arrange a donation."
    },
    {
      icon: ShoppingBag,
      title: "Shop Secondhand",
      description: "Support sustainability by checking local thrift stores, online resale platforms, or community swap groups for yoga gear."
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        <h2 className="text-4xl text-center italic text-white mb-8">
          Ways to Support
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {supportMethods.map((method, index) => (
            <SupportMethod 
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
            />
          ))}
        </div>
        
        <p className="text-center text-white/70 italic mt-8">
          Every small action helps us continue our mission of sustainability.
        </p>
      </div>
    </div>
  );
};

export default Support;