import { useState } from "react";
import Footer from "./Footer";

function Contact() {
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Try again.");
    }
  };


  return (
    <div className="flex flex-col justify-center w-full px-4">
      <div className="max-w-4xl mx-auto h-[70vh] w-full space-y-12 my-24 p-6 bg-white/10 rounded-xl ">
        <h2 className="text-4xl italic text-center text-white my-12">
          Contact Us
        </h2>

        <div className="flex items-center justify-center space-y-6 w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-md"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full text-center p-3 bg-transparent border-b border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full text-center p-3 bg-transparent border-b border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md transition-all duration-300"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full text-center p-3 bg-transparent border-b border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md resize-none transition-all duration-300"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-fit px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              Send Message
            </button>

            {status && (
              <p className="text-white/80 text-center text-xs mt-4">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
