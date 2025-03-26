import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="max-w-2xl mx-auto p-12 space-y-12">
      <h2 className="text-4xl text-center italic mb-24">Ways to Suport</h2>
      <p>
        Not ready to make a purchase? No problem! There are plenty of ways to support our mission and get involved.
      </p>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl">Spread the Word</h3>
          <p>
            Tell your friends, family, and fellow yoga enthusiasts about our shop! A simple recommendation or mention can go a long way in helping us grow and continue our mission. 
          </p>
        </div>

        <div>
          <h3 className="text-xl">Leave a Review</h3>
          <p>
            If you've purchased from us before, leaving a review on Etsy helps others feel confident about supporting us!
          </p>
        </div>
        
        <div>
            <h3 className="text-xl">Donate Materials</h3>
            <p>
            If you’re in the Denver area, you can support us by donating clean, gently used t-shirts that we can upcycle into new pieces.
            Reach out via our contact form below, and we’ll set up a way to receive your donation.
            </p>
        </div>
  
        <div>
          <h3 className="text-xl">Shop Secondhand</h3>
          <p>
            Next time you're looking for a new yoga set or gear, check out your local thrift store, online resale platforms, or community swap groups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
