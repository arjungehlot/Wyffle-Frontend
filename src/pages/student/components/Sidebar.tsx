import { motion } from 'framer-motion';
import {
  Home,
  User,
  TrendingUp,
  FileText,
  MessageCircle,
  Settings,
  ArrowLeft,
} from 'lucide-react';
import { MdPayment } from 'react-icons/md';

const tabs = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "profile", label: "Profile", icon: User },
  { id: "status", label: "Status", icon: TrendingUp },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "payments", label: "Payments", icon: MdPayment },
  { id: "mentorship", label: "Mentorship", icon: MessageCircle },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "back", label: "Back", icon: ArrowLeft },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => (
  <div className="lg:w-1/4">
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            whileHover={{ x: activeTab === tab.id ? 0 : 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <tab.icon className="w-5 h-5" />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Sidebar;
