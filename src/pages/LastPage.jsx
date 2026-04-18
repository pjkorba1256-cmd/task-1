import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMonitor, FiPercent, FiTruck, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

/* ---- Animated Mascot ---- */
function Mascot() {
  return (
    {/* Mobile: w-24 h-24 small corner mascot. Desktop md+: w-80 h-80 full size */}
    <div className="relative w-24 h-24 md:w-80 md:h-80 flex items-center justify-center select-none">
      {/* Back-left teal square */}
      <div
        className="absolute w-14 h-14 md:w-48 md:h-48 rounded-2xl md:rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #2ECBBB 0%, #1AA99A 100%)",
          transform: "rotate(-20deg) translate(-10px, 8px)",
          zIndex: 1,
        }}
      />
      {/* Back-right coral square */}
      <div
        className="absolute w-10 h-10 md:w-32 md:h-32 rounded-2xl md:rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #F2705A 0%, #E85840 100%)",
          transform: "rotate(22deg) translate(18px, 16px)",
          zIndex: 1,
        }}
      />
      {/* Front yellow square (face) */}
      <div
        className="relative w-16 h-16 md:w-52 md:h-52 rounded-[1rem] md:rounded-[2.5rem] shadow-2xl z-10 flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(145deg, #FFE066 0%, #FFD020 100%)",
          boxShadow: "0 8px 30px rgba(255, 208, 32, 0.35)",
        }}
      >
        {/* Eyes */}
        <div className="flex gap-1.5 md:gap-6 mb-1.5 md:mb-4">
          <div className="w-1.5 h-2.5 md:w-3 md:h-5 bg-[#1a1a3e] rounded-full" />
          <div className="w-1.5 h-2.5 md:w-3 md:h-5 bg-[#1a1a3e] rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ---- SVG Wave ---- */
function Wave() {
  return (
    <svg
      viewBox="0 0 1440 600"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
    >
      <path
        d="M-60,580 C80,560 200,500 360,420 C480,360 580,310 700,290 C820,270 940,280 1060,310 C1180,340 1300,370 1440,400"
        fill="none"
        stroke="#2ECBBB"
        strokeWidth="2.5"
        opacity="0.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---- Feature Card ---- */
function FeatureCard({ icon, title, subtitle, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay || 0 }}
      className="flex items-center gap-4 rounded-2xl px-5 py-5"
      style={{
        background: "#1C1A38",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Icon box */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "#252343" }}
      >
        <span className="text-white/80 text-xl">{icon}</span>
      </div>
      {/* Text */}
      <div>
        <p className="text-white font-bold text-sm leading-snug">{title}</p>
        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{subtitle}</p>
      </div>
    </motion.div>
  );
}

/* ---- Main Component ---- */
export default function LastPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Catalogue", "Business", "Shopping"];

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "#13112E", color: "#fff" }}
    >
      {/* ---- NAVBAR ---- */}
      <header className="flex items-center justify-between px-6 md:px-16 py-5 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1.5" fill="white" />
              <rect x="9" y="1" width="6" height="6" rx="1.5" fill="white" opacity="0.6" />
              <rect x="1" y="9" width="6" height="6" rx="1.5" fill="white" opacity="0.6" />
              <rect x="9" y="9" width="6" height="6" rx="1.5" fill="white" opacity="0.3" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">FintiSell</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium transition-colors"
              style={{
                color: i === 1 ? "#fff" : "rgba(255,255,255,0.55)",
                borderBottom: i === 1 ? "2px solid #fff" : "none",
                paddingBottom: i === 1 ? "2px" : "0",
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="last-sign-in"
            className="px-5 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.25)" }}
          >
            Sign in
          </button>
          <button
            id="last-get-started"
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.4)" }}
          >
            Get Started
          </button>
          <div className="flex items-center gap-1 text-sm ml-2 cursor-pointer hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
            English
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="last-mobile-menu"
          className="md:hidden p-2 rounded-lg text-white"
          style={{ background: "rgba(255,255,255,0.1)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 z-50 rounded-2xl p-6 flex flex-col gap-4"
          style={{ background: "rgba(30,27,75,0.98)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {navLinks.map((link) => (
            <a key={link} href="#" className="font-medium py-1 hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
              {link}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white" style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
              Sign in
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white"
              style={{ border: "1px solid rgba(255,255,255,0.4)" }}
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}

      {/* ---- HERO ---- */}
      <section className="relative overflow-hidden px-6 md:px-16 pt-10 pb-16 md:pb-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-12">
          {/* Left: Text — on mobile add right padding so text doesn't overlap the corner mascot */}
          <div className="flex-1 z-10 pr-28 md:pr-0">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6"
            >
              The hassle-free platform
              <br />
              to sell globally for less
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Connect your bank account and start selling to the world today!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(255,208,32,0.45)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/")}
                id="last-hero-cta"
                className="px-8 py-4 rounded-2xl font-bold text-sm"
                style={{ background: "linear-gradient(135deg, #FFE066, #FFD020)", color: "#1E1B4B" }}
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                id="last-demo-btn"
                className="px-8 py-4 rounded-2xl font-bold text-sm text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Book a demo
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Mascot
               Mobile  → absolute, top-right corner, small
               Desktop → in-flow flex item, full size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", damping: 14 }}
            className="absolute top-4 right-4 z-20 md:relative md:top-auto md:right-auto md:flex-shrink-0 md:z-10"
          >
            <Mascot />
          </motion.div>
        </div>

        {/* Wave line */}
        <Wave />

        {/* Glow blobs */}
        <div
          className="absolute top-10 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(93,95,239,0.18) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-0 left-10 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(46,203,187,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </section>

      {/* ---- FEATURE CARDS ---- */}
      <section className="px-6 md:px-16 pb-16 pt-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
          <FeatureCard icon={<FiMonitor />} title="Instant Web & App" subtitle="Start selling today" delay={0.4} />
          <FeatureCard icon={<FiPercent />} title="Integrated payments" subtitle="<1% transaction fees" delay={0.55} />
          <FeatureCard icon={<FiTruck />} title="Integrated global delivery and logistics" subtitle="Live tracking" delay={0.7} />
        </div>
      </section>
    </div>
  );
}
