import React from 'react';

const Mission = () => {
  return (
    <div className="flex flex-col justify-center h-full w-full px-4">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        <h1 className="text-4xl italic text-center mb-8">Our Mission</h1>
        
        <div className="p-12 bg-white/5 rounded-xl border border-white/10 space-y-12">
          <p className="text-white/80">
            Most textiles in thrift stores never get a second life—left unsold and eventually discarded. An estimated 85% of all textiles in the U.S. end up in landfills each year, with thrift stores often unable to sell the majority of donated items due to overstocking or seasonal demand. I wanted to change that.
          </p>
          <p className="text-white/80">
            I personally source t-shirts, blankets, and other fabrics from thrift stores, focusing on materials that are unlikely to sell and would otherwise end up in landfills. Each fabric is thoughtfully chosen for its quality and potential, then repurposed into unique, hand-crocheted yoga accessories.
          </p>
          <p className="text-white/80">
            Due to the handmade nature of each item and the time-intensive preparation of upcycled yarn, production times can vary. Sustainability and high-quality craftsmanship take time, and I prioritize both in every product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
