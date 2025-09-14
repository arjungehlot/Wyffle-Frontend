import { motion } from 'framer-motion';
import {
  CheckCircle,
  Clock,
  AlertCircle,
} from 'lucide-react';

interface StatusStep {
  name: string;
  status: "completed" | "active" | "pending";
  date: string;
}

interface StatusProps {
  getStatusSteps: () => StatusStep[];
}

const Status = ({ getStatusSteps }: StatusProps) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-xl font-bold text-gray-900 mb-6">
      Internship Progress
    </h3>
    <div className="space-y-4">
      {getStatusSteps().map((step, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step.status === "completed"
                ? "bg-green-100"
                : step.status === "active"
                ? "bg-blue-100"
                : "bg-gray-100"
            }`}
          >
            {step.status === "completed" && (
              <CheckCircle className="w-5 h-5 text-green-600" />
            )}
            {step.status === "active" && (
              <Clock className="w-5 h-5 text-blue-600" />
            )}
            {step.status === "pending" && (
              <AlertCircle className="w-5 h-5 text-gray-400" />
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">{step.name}</h4>
            <p className="text-sm text-gray-500">
              {step.date !== 'TBD' ? new Date(step.date).toLocaleDateString() : step.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default Status;
