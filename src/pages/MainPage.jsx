import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../assets/bg-forest.jpg";
import bg2 from "../assets/bg-mountain.jpg";
import bg3 from "../assets/bg-desert.jpg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function MainPage() {
  const navigate = useNavigate();
  const images = [bg1, bg2, bg3];
  const [currentImage, setCurrentImage] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleCreateAccount = () => {
    // Navigate to landing page
    navigate("/landing");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1a1625] flex items-center justify-center p-4 md:p-10"
    >
      <div className="w-full max-w-[1100px] min-h-[650px] bg-[#1f1b2e] rounded-3xl flex overflow-hidden shadow-2xl">

        {/* LEFT SIDE: Image Slider */}
        <div className="w-1/2 relative hidden md:block">
          <AnimatePresence mode="wait">
            {images.map((img, index) => (
              index === currentImage && (
                <motion.img
                  key={index}
                  src={img}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`bg-${index}`}
                />
              )
            ))}
          </AnimatePresence>
          
          {/* Overlay Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-10 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-2xl font-bold tracking-wider">AMU</h1>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm backdrop-blur-md border border-white/10 transition-all">
                Back to website →
              </button>
            </div>

            <div>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                key={currentImage}
                className="text-white text-3xl font-bold leading-tight mb-6"
              >
                Capturing Moments,<br />
                Creating Memories
              </motion.p>

              <div className="flex gap-3">
                {images.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentImage ? "w-8 bg-white" : "w-4 bg-white/30"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Auth Form */}
        <div className="w-full md:w-1/2 px-8 lg:px-16 py-10 text-white flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-4xl font-bold mb-3 tracking-tight">
              Create an account
            </h2>
            <p className="text-gray-400 mb-10">
              Already have an account?{" "}
              <span className="text-purple-400 font-medium cursor-pointer hover:underline underline-offset-4">
                Log in
              </span>
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <input
                  className="w-1/2 h-14 px-5 rounded-xl bg-[#2a2438] border border-transparent focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-gray-500"
                  placeholder="First name"
                />
                <input
                  className="w-1/2 h-14 px-5 rounded-xl bg-[#2a2438] border border-transparent focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-gray-500"
                  placeholder="Last name"
                />
              </div>

              <input
                className="w-full h-14 px-5 rounded-xl bg-[#2a2438] border border-transparent focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-gray-500"
                placeholder="Email"
              />

              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full h-14 px-5 rounded-xl bg-[#2a2438] border border-transparent focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-gray-500" 
                  placeholder="Enter your password" 
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-[#2a2438] text-purple-500 focus:ring-0" />
                <span>
                  I agree to{" "}
                  <span className="text-white hover:underline cursor-pointer">
                    Terms & Conditions
                  </span>
                </span>
              </div>

              <button 
                onClick={handleCreateAccount}
                className="w-full h-14 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Create account
              </button>

              <div className="flex items-center gap-4 text-gray-500 py-2">
                <div className="flex-1 h-px bg-gray-800"></div>
                <span className="text-xs font-semibold uppercase tracking-widest">Or register with</span>
                <div className="flex-1 h-px bg-gray-800"></div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 h-12 border border-gray-800 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
                  <FcGoogle size={22} />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button className="flex-1 h-12 border border-gray-800 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
                  <FaApple size={22} />
                  <span className="text-sm font-medium">Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MainPage;
