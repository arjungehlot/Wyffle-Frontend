import { motion } from 'framer-motion';

const ComingSoon = () => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-lg text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-xl font-bold text-gray-900 mb-4">Coming Soon</h3>
    <p className="text-gray-600">
      This section is under development.
    </p>
  </motion.div>
);

export default ComingSoon;
