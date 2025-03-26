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
    <div className="flex items-center justify-center p-24 text-[lightslategray] bg-white/90 rounded-sm">
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6 text-center"
      >
        <h1 className="text-2xl md:text-4xl my-6">Contact Us</h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="name"
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="message"
          className="w-full text-center border-b border-neutral-300 pb-2 text-neutral-600 placeholder-neutral-400 bg-transparent focus:outline-none resize-none"
          rows="4"
          required
        />
        <button 
          type="submit" 
          className="w-fit px-4 py-1 rounded-sm bg-[lightslategray] text-white/90 border border-opacity-0 hover:text-[lightslategray] hover:bg-transparent hover:border-opacity-100 hover:border-[lightslategray] transition-all duration-300"
        >
          send
        </button>
        {status && (
          <p className="text-neutral-400 text-xs tracking-widest">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
