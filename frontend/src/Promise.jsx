import React from 'react';
import { Leaf, Heart, PenTool } from 'lucide-react';

const Promise = () => {
    const promises = [
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "We only use ethically sourced materials and  packaging made from recycled content."
    },
    {
      icon: Heart,
      title: "Crafted with Care",
      description: "Each piece is carefully handcrafted, with attention to detail and a focus on quality."
    },
    {
      icon: PenTool,
      title: "Intentional Design",
      description: "Each piece is carefully crafted with purpose, ensuring lasting style and appeal."
    }
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full px-4 py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl text-center mb-10">Why Choose Us?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-4 p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10"
            >
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <promise.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium">{promise.title}</h3>
              <p className="">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promise;
