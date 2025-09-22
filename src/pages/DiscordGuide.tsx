import { FC } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileInvoice,
  FaMedal,
  FaCertificate,
  FaUserCheck,
} from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";

type Command = {
  icon: JSX.Element;
  name: string;
  desc: string;
  cmd: string;
  category: "General" | "Internship" | "Community";
};

const commands: Command[] = [
  // General
  {
    icon: <IoMdHelpCircle className="text-purple-600" />,
    name: "Ask Anything",
    desc: "Chat with our bot and get instant answers to your questions, from general info to specific guidance.",
    cmd: "/ask",
    category: "General",
  },
  {
    icon: <FaRobot className="text-purple-600" />,
    name: "Help",
    desc: "Displays a full list of available commands so you never miss a feature.",
    cmd: "/help",
    category: "General",
  },

  // Internship
  {
    icon: <FaFileInvoice className="text-purple-600" />,
    name: "Invoice",
    desc: "Quickly download your internship invoice in one click.",
    cmd: "/invoice",
    category: "Internship",
  },
  {
    icon: <FaCertificate className="text-purple-600" />,
    name: "Offer Letter",
    desc: "Download your official internship offer letter instantly.",
    cmd: "/offerletter",
    category: "Internship",
  },
  {
    icon: <FaCertificate className="text-purple-600" />,
    name: "Certificate",
    desc: "Get your internship completion certificate anytime.",
    cmd: "/certificate",
    category: "Internship",
  },
  {
    icon: <FaUserCheck className="text-purple-600" />,
    name: "Status",
    desc: "Check the current status of your internship application.",
    cmd: "/status",
    category: "Internship",
  },

  // Community
  {
    icon: <FaMedal className="text-purple-600" />,
    name: "Rank",
    desc: "See your XP level and progress in the community.",
    cmd: "/rank",
    category: "Community",
  },
  {
    icon: <MdLeaderboard className="text-purple-600" />,
    name: "Leaderboard",
    desc: "View the top-performing students in our community.",
    cmd: "/leaderboard",
    category: "Community",
  },
];

const CommandsGuide: FC = () => {
  return (
    <div className="relative min-h-screen bg-white py-40 px-8">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
          🤖 Wyffle Discord Bot – Command Guide
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our Wyffle Bot is designed to make your community experience faster and
          easier. Whether you want to ask questions, check your rank, download
          internship documents, or stay updated — everything is just one command
          away. Use the following guide to explore all the commands and learn
          how you can get things done instantly inside our Discord server.
        </p>
      </motion.div>

      {/* Command Categories */}
      {["General", "Internship", "Community"].map((category) => (
        <div key={category} className="max-w-6xl mx-auto mb-16">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-700 mb-8"
          >
            {category} Commands
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {commands
              .filter((cmd) => cmd.category === category)
              .map((cmd, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 border border-purple-200 hover:shadow-2xl"
                >
                  <div className="text-4xl text-purple-600">{cmd.icon}</div>
                  <h3 className="text-xl font-bold text-purple-700">{cmd.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cmd.desc}
                  </p>
                  <motion.code
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-700 text-white px-3 py-1 rounded-md text-sm mt-2 self-start"
                  >
                    {cmd.cmd}
                  </motion.code>
                </motion.div>
              ))}
          </div>
        </div>
      ))}

      {/* Outro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mt-20"
      >
        <h3 className="text-2xl font-bold text-purple-700 mb-4">
          🚀 Why Use Wyffle Bot?
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Instead of waiting for manual responses, you can instantly access
          everything you need. From important documents like invoices and offer
          letters to fun features like rank and leaderboard, Wyffle Bot makes
          sure you stay productive and engaged. Type any of the commands above
          in our Discord server and experience the speed yourself!
        </p>
      </motion.div>
    </div>
  );
};

export default CommandsGuide;
