import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";
import Arjun from "../Assets/Arjun.jpg";
import Aayush from "../Assets/Ayush.jpg";

export const About: React.FC = () => {
  return (
    <div className="min-h-screen py-24 bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold text-white"
          >
            About Wyffle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto"
          >
            Wyffle is a modern platform built to empower innovation, simplify collaboration,
            and bring bold ideas to life.
          </motion.p>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 bg-white rounded-2xl shadow-lg cursor-pointer"
        >
          <Target className="text-indigo-600 mb-4" size={40} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            At Wyffle, our mission is to make technology accessible, scalable, and impactful.
            We aim to create solutions that simplify lives and accelerate growth for individuals
            and businesses alike.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-8 bg-white rounded-2xl shadow-lg cursor-pointer"
        >
          <Rocket className="text-purple-600 mb-4" size={40} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            We envision a connected future where ideas transform seamlessly into reality.
            Wyffle strives to be a hub for innovation, inspiring creativity and collaboration globally.
          </p>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Users className="mx-auto text-indigo-600 mb-6" size={50} />
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Founders</h2>

          <div className="grid sm:grid-cols-2 gap-10">
            {/* Arjun */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <img
                src={Arjun}
                alt="Arjun Gehlot"
                className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-500 object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Arjun Gehlot</h3>
              <p className="text-indigo-600 font-medium">Co-Founder</p>
              <p className="mt-3 text-gray-600">
                A passionate tech innovator with expertise in web development and entrepreneurship,
                driving Wyffle’s vision to empower digital solutions.
              </p>
            </motion.div>

            {/* Aayush */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <img
                src={Aayush}
                alt="Aayush Raj"
                className="w-32 h-32 mx-auto rounded-full border-4 border-purple-500 object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Aayush Raj</h3>
              <p className="text-purple-600 font-medium">Co-Founder</p>
              <p className="mt-3 text-gray-600">
                A visionary leader and problem solver, bringing creativity and strategy to Wyffle,
                making sure ideas evolve into impactful realities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
