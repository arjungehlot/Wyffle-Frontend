import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaCode, FaTrophy, FaUsers, FaDiscord } from "react-icons/fa";

// Define TypeScript types
interface Event {
  title: string;
  date: string;
  desc: string;
  img: string;
}

type Category = "Hackathons" | "Coding Competitions" | "Tech Fests";

const categories: Category[] = ["Hackathons", "Coding Competitions", "Tech Fests"];

const eventsData: Record<Category, Event[]> = {
  Hackathons: [
    {
      title: "Smart India Hackathon",
      date: "Oct 28 - Oct 30, 2025",
      desc: "National-level hackathon to solve real-world problems.",
      img: "https://cse.noticebard.com/wp-content/uploads/sites/23/2023/08/Smart-India-Hackathon-2023.jpg",
    },
    {
      title: "AI Challenge",
      date: "Nov 12 - Nov 14, 2025",
      desc: "Build innovative AI solutions in 36 hours.",
      img: "https://framerusercontent.com/assets/8zE1cw2uW0PtSANxYynp9aKnnP8.png",
    },
  ],
  "Coding Competitions": [
    {
      title: "CodeSprint 2.0",
      date: "Nov 20, 2025",
      desc: "Competitive programming contest for coders worldwide.",
      img: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1714468394.png?d=700x400",
    },
    {
      title: "AlgoMasters",
      date: "Dec 1, 2025",
      desc: "Algorithm-focused coding competition.",
      img: "https://algomaster.io/og-image.png",
    },
  ],
  "Tech Fests": [
    {
      title: "TechNova Fest",
      date: "Dec 10 - Dec 12, 2025",
      desc: "College-wide fest featuring tech talks, workshops, and hackathons.",
      img: "https://img.freepik.com/premium-vector/artificial-intelligence-logo-plexus-effect-future-tech-logo-ai-artificial-intelligence-machine-learning-concept-vector-symbol-ai-neural-networks-another-modern-technologies-concepts_208588-3489.jpg",
    },
    {
      title: "InnovateX",
      date: "Jan 5 - Jan 7, 2026",
      desc: "Showcase of projects, coding battles, and seminars.",
      img: "https://cdn.projects.co.id/upload/usrf08039/2023081464d9e85047593.jpg",
    },
  ],
};

const Events: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Hackathons");

  return (
    <div className="min-h-screen bg-white pt-28 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-24  text-center overflow-hidden">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Explore Exciting Tech Events 🚀
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg max-w-3xl mx-auto mb-8"
        >
          Join online hackathons, coding competitions, and tech fests. Showcase your
          skills, win prizes, and connect with top talent.
        </motion.p>
        <div className="flex justify-center gap-6">
          <motion.button whileHover={{ scale: 1.1 }} className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg">
            Explore Events
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="bg-indigo-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
            Join Discord
          </motion.button>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="max-w-6xl mx-auto mt-12 px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              className={`px-4 sm:px-5 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${activeCategory === cat
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Event Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {eventsData[activeCategory].map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={event.img} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                    <FaCalendarAlt /> {event.date}
                  </p>
                  <p className="text-gray-700 mb-4">{event.desc}</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Upcoming Events Timeline</h2>
        <div className="relative border-l-4 border-purple-500 pl-6 space-y-10">
          {Object.values(eventsData).flat().map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-md p-6 rounded-lg border hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg text-purple-700">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-700">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white mt-20 py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-16"
        >
          Why Participate?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {[
            { icon: <FaTrophy className="text-5xl text-yellow-400" />, title: "Win Prizes", desc: "Compete and earn amazing rewards for your skills." },
            { icon: <FaUsers className="text-5xl text-purple-600" />, title: "Network", desc: "Connect with peers, mentors, and industry leaders." },
            { icon: <FaCode className="text-5xl text-green-500" />, title: "Boost Skills", desc: "Enhance your coding and problem-solving expertise." },
            { icon: <FaCalendarAlt className="text-5xl text-blue-500" />, title: "Certificates", desc: "Get verified certificates to showcase your achievements." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              viewport={{ once: true }}
              className="bg-white border border-purple-100 rounded-2xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4 p-4 bg-purple-100 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="mt-4 font-bold text-xl text-purple-700">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Call to Action Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-44 h-[500px] text-center mt-20">
        <h2 className="text-5xl font-bold mb-4">Ready to Join the Action?</h2>
        <p className="mb-6">Connect with fellow coders, join hackathons, and showcase your talent.</p>
        <a
          href="https://discord.gg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <FaDiscord /> Join Our Discord
        </a>
      </footer>
    </div>
  );
};

export default Events;
