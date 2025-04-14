import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { db } from "../firebase"; // ✅ import Firestore instance
import { collection, addDoc } from "firebase/firestore";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), { // ✅ use db here, not app
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });
      
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message!");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            We would love to hear from you! Whether you have questions, suggestions, or just want to say hi, feel free to send us a message.
            Our team is here to help you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mt-16">
          {/* Social Links */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl transform transition-all duration-300 hover:scale-110" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-3xl transform transition-all duration-300 hover:scale-110" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.instagram.com/cloudcoreitsolutions?igsh=MWxhaWh1MHMzN2lxNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-3xl transform transition-all duration-300 hover:scale-110" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-3xl transform transition-all duration-300 hover:scale-110" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 text-3xl transform transition-all duration-300 hover:scale-110" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
