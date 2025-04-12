import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <div className="mb-4">
          <label className="block text-lg text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-yellow-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
