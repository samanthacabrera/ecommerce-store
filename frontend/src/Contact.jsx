import { useState } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl text-center italic mb-24">
        Get in Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl gap-8 p-16 bg-white shadow rounded-t-2xl"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="bg-transparent border-b border-[#778899] focus:border-gray-600 text-gray-700 px-4 py-4 transition-all duration-300 outline-none tracking-wide text-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="bg-transparent border-b border-[#778899] focus:border-gray-600 text-gray-700 px-4 py-4 transition-all duration-300 outline-none tracking-wide text-lg"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="bg-transparent border-b border-[#778899] focus:border-gray-600 text-gray-700 px-4 py-4 transition-all duration-300 outline-none tracking-wide text-lg h-36 resize-none"
          required
        />
        <button
          type="submit"
          className="text-gray-400"
        >
          Send Message
        </button>
        {status && (
          <p className="text-xs text-center text-gray-400">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
