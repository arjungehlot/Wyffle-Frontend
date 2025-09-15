import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import ComingSoon from "./student/components/ComingSoon";

type Node = {
  id: string;
  label: string;
  desc?: string;
  children?: Node[];
};

// Tree data
const data: Node[] = [
  {
    id: "welcome",
    label: "🏠 Welcome",
    children: [
      { id: "greet", label: "🎉 welcome", desc: "Auto greeting" },
      { id: "rules", label: "📜 rules", desc: "Community guidelines" },
      { id: "announcements", label: "📢 announcements", desc: "Latest updates" },
    ],
  },
  {
    id: "internship",
    label: "👔 Internship Hub",
    children: [
      {
        id: "apply",
        label: "📝 how-to-apply",
        children: [
          { id: "form", label: "📑 Fill Form" },
          { id: "review", label: "🔎 Review process" },
        ],
      },
      { id: "resources", label: "📚 resources" },
      { id: "status", label: "✅ internship-status" },
    ],
  },
  {
    id: "community",
    label: "🎮 Community",
    children: [
      { id: "rank", label: "/rank", desc: "Check XP level" },
      { id: "leaderboard", label: "/leaderboard", desc: "Top students" },
    ],
  },
  {
    id: "intern",
    label: "💻 Intern Commands",
    children: [
      { id: "invoice", label: "/invoice", desc: "Download invoice" },
      { id: "offerletter", label: "/offerletter", desc: "Download offer letter" },
    ],
  },
];

// 🔹 Reusable expandable button component
const NodeButton: FC<{ node: Node }> = ({ node }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 
                   text-white rounded-full shadow-lg font-semibold"
      >
        {node.label}
      </motion.button>

      {/* Expand children */}
      <AnimatePresence>
        {open && node.children && (
          <motion.div
            className="flex gap-6 mt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {node.children.map((child) => (
              <NodeButton key={child.id} node={child} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 🔹 Main Page Component
const HorizontalTree: FC = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-purple-100 py-40 flex flex-col items-center justify-center p-10">
      {/* Title */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-purple-800 mb-12 flex items-center gap-3"
      >
        <FaDiscord className="text-indigo-600" /> Wyffle Community Tree
      </motion.h1>

      {/* Root level buttons */}
      <div className="flex gap-10 flex-wrap justify-center">
        {data.map((node) => (
          <NodeButton key={node.id} node={node} />
        ))}
      </div>
      <ComingSoon />
    </div>
  );
};

export default HorizontalTree;
