import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      institute: "IIT Delhi",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
      content:
        "Wyffle transformed my understanding of real-world development. The mentorship and projects gave me confidence to land my dream job at Google.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      role: "Full Stack Developer at Microsoft",
      institute: "NIT Trichy",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
      content:
        "The community at Wyffle is incredible. I learned more in 3 months than I did in my entire college curriculum. Highly recommended!",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "Product Manager at Amazon",
      institute: "BITS Pilani",
      image:
        "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
      content:
        "Wyffle didn't just give me technical skills, it taught me how to think like a product person. The real projects made all the difference.",
      rating: 5,
    },
    {
      name: "Aman Verma",
      role: "UI/UX Designer at Adobe",
      institute: "IIT Bombay",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
      content:
        "The design exposure and project-based learning gave me a competitive edge. My portfolio stood out because of Wyffle.",
      rating: 5,
    },
    {
      name: "Simran Kaur",
      role: "Data Scientist at Meta",
      institute: "IISc Bangalore",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
      content:
        "Working on real-world datasets during Wyffle boosted my ML confidence. It made job interviews much easier!",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "DevOps Engineer at Netflix",
      institute: "VIT Vellore",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300",
      content:
        "Wyffle prepared me for high-pressure environments. I now work on scaling systems that serve millions every day.",
      rating: 5,
    },
  ];

  const slots = 3;
  const [indices, setIndices] = useState(Array(slots).fill(0));

  useEffect(() => {
    const intervals = indices.map((_, slotIdx) =>
      setInterval(() => {
        setIndices((prev) => {
          const newIndices = [...prev];
          newIndices[slotIdx] =
            (newIndices[slotIdx] + 1) % testimonials.length;
          return newIndices;
        });
      }, 4000 + slotIdx * 2000) // stagger by 1s
    );

    return () => intervals.forEach((id) => clearInterval(id));
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our alumni who are now working at top tech companies
            worldwide.
          </p>
        </motion.div>

        {/* Grid of independent carousels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {indices.map((idx, slotIdx) => (
            <div key={slotIdx} className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx} // trigger re-mount when index changes
                  className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-between"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonials[idx].content}"
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[idx].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 mt-auto">
                    <img
                      src={testimonials[idx].image}
                      alt={testimonials[idx].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[idx].name}
                      </h4>
                      <p className="text-sm text-purple-600 font-medium">
                        {testimonials[idx].role}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonials[idx].institute}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
