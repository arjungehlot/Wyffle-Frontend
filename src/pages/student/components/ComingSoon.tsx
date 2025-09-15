import { motion } from 'framer-motion';

const ComingSoon = () => (
  <motion.div
    className="pt-36 min-h-screen text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h3>
    <p className="text-gray-600">
      This section is under development.
    </p>
  </motion.div>
);

export default ComingSoon;
