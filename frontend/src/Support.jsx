import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="max-w-2xl mx-auto p-12 space-y-6">
      <h2 className="text-4xl text-center italic mb-24">Ways to Suport</h2>
      <p>
        Not ready to make a purchase? No problem! There are plenty of ways to support our mission and help spread the word.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl">Spread the Word</h3>
          <p>
            Share our shop with your friends, family, and fellow yoga lovers! Word of mouth is powerful.
          </p>
        </div>

        <div>
          <h3 className="text-xl"> Leave a Review</h3>
          <p>
            If you've purchased from us before, leaving a review on Etsy helps others feel confident about supporting us!
          </p>
        </div>
        
        <div>
          <h3 className="text-xl">Shop Secondhand</h3>
          <p>
            Buying secondhand helps reduce textile waste. Next time you need a new yoga top, check out your local thrift store first!
          </p>
        </div>
        
        <div>
            <h3 className="text-xl">Directly Donate</h3>
            <p>If you’re in the Denver area, you can support us by donating clean, gently used t-shirts that we can upcycle into new pieces.</p>
            <Link to="/" className="border p-1 text-xs">Learn More</Link>
        </div>
        
        <div>
            <h3 className="text-xl">Donate via PayPal</h3>
            <p>If you’d like to support our work directly, you can make a contribution to help keep this project running.</p>
            <a href="https://paypal.com" target="_blank" className="border p-1 text-xs">Donate Now</a>
        </div>
      </div>
    </div>
  );
};

export default Support;
