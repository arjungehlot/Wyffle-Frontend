import { motion } from 'framer-motion';
import {
  Calendar,
  Award,
  Clock,
} from 'lucide-react';

interface OverviewProps {
  studentData: {
    fullName: string;
    progressPercentage: number;
    activeDays: number | undefined;
    projectsBuilt: number | undefined;
    status: string;
  };
}

const Overview = ({ studentData }: OverviewProps) => (
  <div className="space-y-8">
    <motion.div
      className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-2xl text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-2">
        Welcome back, {studentData.fullName}! 👋
      </h2>
      <p className="text-purple-100">
        You're {studentData.progressPercentage}% through your internship journey.
        Keep up the great work!
      </p>

      <div className="mt-6 bg-white/20 rounded-full h-3">
        <motion.div
          className="bg-white rounded-full h-3"
          initial={{ width: 0 }}
          animate={{ width: `${studentData.progressPercentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          icon: Calendar,
          label: "Days Active",
          value: studentData.activeDays || 0,
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: Award,
          label: "Projects",
          value: studentData.projectsBuilt || 0,
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: Clock,
          label: "Progress",
          value: `${studentData.progressPercentage}%`,
          color: "from-orange-500 to-red-500",
        },
      ].map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <div
            className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}
          >
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            {stat.value}
          </h3>
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Current Status
      </h3>
      <div className="flex items-center space-x-4">
        <div className={`w-3 h-3 rounded-full ${
          studentData.status === 'active' ? 'bg-green-500 animate-pulse' :
          studentData.status === 'shortlisted' ? 'bg-yellow-500' :
          'bg-gray-400'
        }`} />
        <span className="text-lg font-medium text-gray-700 capitalize">
          {studentData.status}
        </span>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          studentData.status === 'active' ? 'bg-green-100 text-green-700' :
          studentData.status === 'shortlisted' ? 'bg-yellow-100 text-yellow-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {studentData.status === 'active' ? 'On Track' :
           studentData.status === 'shortlisted' ? 'Payment Pending' :
           'Under Review'}
        </span>
      </div>
    </motion.div>
  </div>
);

export default Overview;
