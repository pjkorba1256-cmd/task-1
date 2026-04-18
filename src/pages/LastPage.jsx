import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiHome, FiSettings, FiUser } from "react-icons/fi";

function LastPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1a1625] text-white flex items-center justify-center p-4 md:p-6"
    >
      <div className="max-w-md w-full px-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12 }}
          className="bg-[#1f1b2e] border border-white/5 rounded-[30px] md:rounded-[40px] p-6 md:p-10 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/20 blur-[100px] rounded-full"></div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-24 h-24 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20"
          >
            <FiCheckCircle size={48} className="text-white" />
          </motion.div>

          <h1 className="text-3xl font-extrabold mb-4">All Set!</h1>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Your profile has been setup and verified. You're now ready to experience the full power of AMU.
          </p>

          <div className="space-y-3 mb-10">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <FiUser className="text-purple-400" />
                <span className="text-sm font-medium text-gray-300">Profile Status</span>
              </div>
              <span className="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">Verified</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <FiSettings className="text-purple-400" />
                <span className="text-sm font-medium text-gray-300">Account Type</span>
              </div>
              <span className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">Premium</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full h-14 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all hover:shadow-lg"
          >
            <FiHome /> Back to Start
          </button>

          <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-semibold italic">
            Thank you for choosing AMU
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LastPage;
