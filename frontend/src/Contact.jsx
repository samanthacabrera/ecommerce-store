import { useState } from "react";

function Contact() {
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
      const response = await fetch("/api/contact", {
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
    <div className="text-center">
      <h2 className="text-4xl text-center italic mb-24">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-[40vw] gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="bg-transparent border-b border-gray-400 focus:border-white px-2 py-2 transition-all duration-300 outline-none tracking-wider"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="bg-transparent border-b border-gray-400 focus:border-white px-2 py-2 transition-all duration-300 outline-none tracking-wider"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="bg-slate-200 text-slate-900 border-b border-gray-400 focus:border-white px-2 py-2 transition-all duration-300 outline-none tracking-wider h-32 resize-none"
          required
        />
        <button
          type="submit"
          className="w-full border p-1 hover:scale-105 transition"
        >
          Send
        </button>
        {status && <p className="text-sm my-2">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
