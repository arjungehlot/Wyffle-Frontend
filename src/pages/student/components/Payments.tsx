import { motion } from 'framer-motion';
import {
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

interface PaymentsProps {
  studentData: any;
  couponCode: string;
  setCouponCode: (code: string) => void;
  couponApplied: boolean;
  discountAmount: number;
  finalPrice: number;
  handleApplyCoupon: () => void;
  handlePayment: () => void;
  payments: any[];
}

const Payments = ({ studentData, couponCode, setCouponCode, couponApplied, discountAmount, finalPrice, handleApplyCoupon, handlePayment, payments }: PaymentsProps) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-xl font-bold text-gray-900 mb-6">
      Payment Details
    </h3>
    
    <div className="mb-8 p-6 bg-purple-50 rounded-xl border border-purple-200">
      <h4 className="text-lg font-semibold text-purple-800 mb-2">
        {studentData.batchName || "Web Development Internship"}
      </h4>
      <p className="text-gray-600">Join our exclusive web development program with hands-on projects and mentorship</p>
    </div>
    
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Payment Status</h4>
      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
        <div
          className={`w-3 h-3 rounded-full ${
            studentData?.paymentStatus === "not_selected"
              ? "bg-gray-400"
              : studentData?.paymentStatus === "pending"
              ? "bg-yellow-400"
              : studentData?.paymentStatus === "paid"
              ? "bg-green-400"
              : "bg-red-400"
          }`}
        ></div>

        <span className="font-medium text-gray-700 capitalize">
          {studentData?.paymentStatus
            ? studentData.paymentStatus.replace("_", " ")
            : "Unknown"}
        </span>

        {studentData?.paymentStatus === "not_selected" && (
          <span className="ml-auto px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
            Not Shortlisted
          </span>
        )}

        {studentData?.paymentStatus === "pending" && (
          <span className="ml-auto px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
            Payment Required
          </span>
        )}

        {studentData?.paymentStatus === "paid" && (
          <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
            Payment Complete
          </span>
        )}
      </div>
    </div>

    <div className="mb-8 p-6 bg-gray-50 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Pricing Details</h4>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Program Fee</span>
          <span className="font-medium">₹399/-</span>
        </div>
        {couponApplied && (
          <div className="flex justify-between text-green-600">
            <span>Discount ({couponCode})</span>
            <span className="font-medium">-₹{discountAmount}</span>
          </div>
        )}
        <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold text-lg">
          <span>Total Amount</span>
          <span>₹{finalPrice}/-</span>
        </div>
      </div>
    </div>
    
    {studentData.status === 'shortlisted' && studentData.paymentStatus !== 'paid' && (
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Apply Coupon</h4>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <motion.button
            className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleApplyCoupon}
          >
            Apply
          </motion.button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Use code <span className="font-mono bg-gray-100 px-2 py-1 rounded">TOP100</span> for ₹100 instant discount
        </p>
      </div>
    )}
    
    {studentData.status === 'shortlisted' && studentData.paymentStatus !== 'paid' && (
      <motion.button
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handlePayment}
      >
        Pay Now - ₹{finalPrice}/-
      </motion.button>
    )}

    {studentData.status !== 'shortlisted' && studentData.status !== 'active' && (
      <div className="p-4 bg-yellow-50 text-yellow-700 rounded-xl border border-yellow-200">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span className="font-medium">
            Payment will be available once your application is shortlisted.
          </span>
        </div>
      </div>
    )}
    
    {studentData.paymentStatus === 'paid' && (
      <motion.div
        className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span className="font-medium">
            Payment successful! Your enrollment is confirmed.
          </span>
        </div>
      </motion.div>
    )}

    {payments.length > 0 && (
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Payment History</h4>
        <div className="space-y-3">
          {payments.map((payment) => (
            <div key={payment.orderId} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium">Order #{payment.orderId}</p>
                <p className="text-sm text-gray-600">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹{payment.finalAmount}</p>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  payment.status === 'paid' ? 'bg-green-100 text-green-700' :
                  payment.status === 'failed' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </motion.div>
);

export default Payments;
