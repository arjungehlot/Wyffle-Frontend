import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaMapMarkerAlt
} from "react-icons/fa";
import arjunImage from "../Assets/Arjun.jpg";
import ayushImage from "../Assets/Ayush.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Subtle animated purple background shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full filter blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full filter blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 container pt-28 mx-auto px-4 py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-purple-700 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info + Co-Founders */}
          <div className="space-y-8">
            {/* Contact Info */}
            <motion.div 
              className="bg-purple-50 p-8 rounded-2xl shadow-lg border border-purple-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Contact Info
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-purple-600 w-6 h-6 mr-3" />
                  <span className="text-gray-700">contact@company.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-purple-600 w-6 h-6 mr-3" />
                  <span className="text-gray-700">+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp className="text-purple-600 w-6 h-6 mr-3" />
                  <span className="text-gray-700">+1 (123) 456-7890</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-purple-700 hover:text-purple-900 text-2xl"><FaLinkedin /></a>
                <a href="#" className="text-purple-700 hover:text-purple-900 text-2xl"><FaGithub /></a>
                <a href="#" className="text-purple-700 hover:text-purple-900 text-2xl"><FaInstagram /></a>
              </div>
            </motion.div>

            {/* Co-Founders */}
            <motion.div 
              className="bg-purple-50 p-6 rounded-2xl shadow-lg border border-purple-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Meet Our Co-Founders</h2>
              <div className="space-y-6">
                {/* Arjun */}
                <motion.div 
                  className="flex items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={arjunImage} className="w-16 h-16 rounded-full mr-4 border-2 border-purple-200" />
                  <div>
                    <h3 className="text-purple-700 font-bold">Arjun Gehlot</h3>
                    <p className="text-gray-600 text-sm">Co-Founder & Tech Lead</p>
                    <div className="flex space-x-3 mt-1 text-purple-700 text-lg">
                      <a href="https://www.linkedin.com/in/arjungehlot"><FaLinkedin /></a>
                      <a href="https://github.com/arjungehlot"><FaGithub /></a>
                      <a href="https://instagram.com/_arjun_.19"><FaInstagram /></a>
                    </div>
                  </div>
                </motion.div>
                {/* Ayush */}
                <motion.div 
                  className="flex items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={ayushImage} className="w-16 h-16 rounded-full mr-4 border-2 border-purple-200" />
                  <div>
                    <h3 className="text-purple-700 font-bold">Ayush Raj</h3>
                    <p className="text-gray-600 text-sm">Co-Founder & Business Manager</p>
                    <div className="flex space-x-3 mt-1 text-purple-700 text-lg">
                      <a href="https://www.linkedin.com/in/ayush"><FaLinkedin /></a>
                      <a href="https://github.com/ayush"><FaGithub /></a>
                      <a href="https://instagram.com/ayush"><FaInstagram /></a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-200">
              <h2 className="text-3xl font-bold text-purple-700 mb-4">Send us a message</h2>
              <p className="text-gray-600 mb-6">We'll get back to you as soon as possible</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition shadow-sm"
                    required
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition shadow-sm"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition shadow-sm"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-700 flex justify-center items-center transition`}
                >
                  <FaPaperPlane className="mr-2" /> Send Message
                </motion.button>

                {status === "success" && (
                  <p className="mt-4 text-green-600 font-medium text-center bg-green-50 p-3 rounded-xl">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-600 font-medium text-center bg-red-50 p-3 rounded-xl">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
