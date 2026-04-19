import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiGrid, FiRepeat, FiUsers, FiBox, FiBookOpen, 
  FiBriefcase, FiUserPlus, FiFileText, FiCalendar,
  FiSearch, FiBell, FiMail, FiMoreVertical, FiChevronRight,
  FiArrowUpRight, FiArrowDownLeft, FiZap, FiMenu, FiX
} from "react-icons/fi";

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="h-screen overflow-hidden bg-[#F5F7FA] flex flex-col md:flex-row font-sans text-[#2D3748] relative"
    >
      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <aside className={`
        fixed md:sticky top-0 h-screen z-50 md:z-auto transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        w-72 bg-white border-r border-gray-200 flex flex-col p-8 overflow-y-auto h-full
      `}>
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5D5FEF] rounded-xl flex items-center justify-center">
              <FiZap className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold text-[#1A202C]">Super Finti</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="md:hidden text-gray-500 hover:text-gray-800">
            <FiX size={24} />
          </button>
        </div>

        {/* Sidebar Nav - Main Navigation */}
        <div className="mb-10">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Main Navigation</p>
          <nav className="space-y-4">
            <SidebarLink icon={<FiGrid />} label="Dashboard" active />
            <SidebarLink icon={<FiRepeat />} label="Transactions" />
            <SidebarLink icon={<FiUsers />} label="Contacts" />
            <SidebarLink icon={<FiBox />} label="Features" />
            <SidebarLink icon={<FiBookOpen />} label="Library" />
          </nav>
        </div>

        {/* Sidebar Nav - Settings */}
        <div className="mb-10">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Settings & Schedules</p>
          <nav className="space-y-4">
            <SidebarLink icon={<FiBriefcase />} label="Base Wallet" />
            <SidebarLink icon={<FiUserPlus />} label="My Contacts" />
            <SidebarLink icon={<FiFileText />} label="Invoices" />
            <SidebarLink icon={<FiCalendar />} label="Schedules" />
          </nav>
        </div>

        {/* Help Center Card */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-br from-[#FFD882] to-[#FFAB40] rounded-3xl p-6 text-center shadow-lg shadow-orange-200/50">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-orange-500">?</div>
            <h4 className="font-bold text-white mb-2">Help Center</h4>
            <p className="text-[10px] text-white/80 mb-6 leading-relaxed">Having trouble in Finti, Please contact us for more questions.</p>
            <button 

              className="w-full bg-white text-orange-500 py-3 rounded-2xl text-[11px] font-bold hover:bg-gray-50 transition-colors"
            >
              Go To Help Center
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col relative min-w-0 overflow-y-auto h-full">
        {/* TOP HEADER WITH GRADIENT BACKGROUND */}
        <header className="min-h-[14rem] md:min-h-[16rem] h-auto bg-gradient-to-r from-[#5D26C1] via-[#A17FE0] to-[#5D26C1] px-6 md:px-10 pt-20 md:pt-8 pb-32 text-white relative">
          
          {/* Mobile Sticky Bar */}
          <div className="fixed top-0 left-0 right-0 md:hidden h-16 bg-[#5D26C1] z-30 px-6 flex items-center justify-between shadow-lg">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <FiMenu size={20} />
              </button>
              <div className="flex items-center gap-3">
                  <span className="text-sm">Hi, <span className="font-bold">Prince</span></span>
                  <img src="https://ui-avatars.com/api/?name=Prince&background=FF8A65&color=fff" alt="avatar" className="w-8 h-8 rounded-lg" />
              </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-0">
            {/* Desktop Only Search & Icons logic */}
            <div className="hidden md:block w-auto">
               <h1 className="text-xl font-bold opacity-80">Dashboard Overview</h1>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80 group">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 group-focus-within:text-white transition-colors" />
              <input 
                type="text" 
                placeholder="Search.." 
                className="w-full bg-white/10 border-none rounded-xl py-2.5 pl-11 pr-4 text-sm placeholder:text-white/60 focus:ring-2 focus:ring-white/20 transition-all outline-none"
              />
            </div>

            {/* Header Icons & Profile */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-4">
                <FiZap className="cursor-pointer opacity-80 hover:opacity-100" />
                <FiMail className="cursor-pointer opacity-80 hover:opacity-100" />
                <FiMoreVertical className="cursor-pointer opacity-80 hover:opacity-100" />
              </div>
              <div className="flex items-center gap-8 text-sm font-medium">
                <a href="#" className="hover:opacity-80">Wallet</a>
                <a href="#" className="hover:opacity-80">Invoices</a>
                <div className="flex items-center gap-3">
                  <span>Hi, <span className="font-bold">Prince</span></span>
                  <img src="https://ui-avatars.com/api/?name=Prince&background=FF8A65&color=fff" alt="avatar" className="w-10 h-10 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT AREA (OVERLAPPING HEADER) */}
        <section className="px-5 md:px-10 -mt-24 pb-20 z-10 space-y-8">
          {/* TOP CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CREDIT CARD */}
            <div className="bg-gradient-to-tr from-[#9EE0A1] to-[#D5F5E3] rounded-3xl p-6 h-56 shadow-xl shadow-green-100/50 flex flex-col justify-between relative overflow-hidden">
               {/* Decorative Circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-black rounded-full overflow-hidden flex transform scale-75">
                  <div className="w-1/2 h-full bg-black"></div>
                  <div className="w-1/2 h-full bg-black/60"></div>
                </div>
              </div>

              <div>
                <p className="text-[9px] text-black/50 font-bold uppercase tracking-widest mb-1">Card Number</p>
                <h3 className="text-xl font-bold tracking-widest mb-6">**** **** **** 4567</h3>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[8px] text-black/50 font-bold uppercase mb-1">Card Holder</p>
                    <p className="font-bold text-xs">Prince Jain</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] text-black/50 font-bold uppercase mb-1">Valid Till</p>
                    <p className="font-bold text-xs">12/29</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SAVING STATUS CARD */}
            <div className="bg-white rounded-3xl p-6 h-56 shadow-xl shadow-gray-200/50 flex flex-col justify-between relative">
              <div className="flex justify-between items-start">
                <h4 className="text-base font-extrabold text-[#1A202C]">Saving Status</h4>
                <div className="text-gray-400 cursor-pointer text-xs">?</div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#FF8A65] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-100 border-4 border-orange-50">
                   <div className="bg-white/30 p-2 rounded-lg">
                      <FiBox className="text-white text-lg" />
                   </div>
                </div>
                <div>
                   <p className="text-2xl font-extrabold text-[#1A202C]">4.28%</p>
                   <p className="text-[10px] text-gray-400 font-medium mt-0.5">Your spending increased</p>
                </div>
              </div>
              <div className="w-full bg-gray-50 h-1.5 rounded-full overflow-hidden">
                <div className="w-[42%] h-full bg-[#FF8A65]"></div>
              </div>
            </div>

            {/* WORKING BALANCE CARD */}
            <div className="bg-[#00D7E4] rounded-3xl p-6 h-56 shadow-xl shadow-cyan-100/50 flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <h4 className="text-base font-extrabold">Working Balance</h4>
                <p className="text-[9px] font-bold uppercase underline cursor-pointer opacity-80">Saving Account</p>
              </div>
              <div className="mt-4">
                <h2 className="text-3xl font-extrabold leading-tight">INR 2,250,000</h2>
              </div>
              <div className="flex justify-between items-center">
                 <div className="bg-white/20 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2">
                    INR <FiArrowDownLeft />
                 </div>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION: STATISTICS - Unified Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              <InlineMetric title="Spending By Week" value="210k" change="23k" bars={[40, 55, 45, 70, 50, 90, 60]} color="#FF8A65" />
              <InlineMetric title="Savings" value="185k" change="45k" bars={[50, 60, 40, 55, 65, 30, 85]} color="#5D26C1" />
              <InlineMetric title="Credit Card Spendings" value="124k" change="29k" bars={[60, 45, 70, 50, 80, 55, 95]} color="#00D7E4" />
            </div>
          </div>

          {/* BOTTOM SECTION: TRANSACTIONS */}
          <div className="grid grid-cols-1 xl:grid-cols-7 gap-8">
            {/* LATEST TRANSACTIONS */}
            <div className="xl:col-span-4 bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/40">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-lg font-extrabold text-[#1A202C]">Latest Transactions</h4>
                <div className="flex gap-4 text-gray-400 text-sm">
                  <FiSearch className="cursor-pointer hover:text-gray-600" />
                  <FiRepeat className="cursor-pointer hover:text-gray-600 rotate-90" />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Mon, Mar 1</p>
                  <TransactionItem icon={<FiArrowRight />} label="Payment Sent to Shakir" amount="Rs.560.00" />
                  <TransactionItem icon={<FiArrowLeft />} label="Salary from Redwhale" amount="Rs.12,200.00" positive />
                  <TransactionItem icon={<FiZap />} label="Money Sent to Wise.com" amount="Rs.3,000.00" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 border-t border-gray-100 pt-8">Mon, Mar 1</p>
                  <TransactionItem icon={<FiArrowRight />} label="Purchased Macbook Pro" amount="Rs.5560.00" />
                </div>
              </div>
            </div>

            {/* UPCOMING TRANSACTIONS */}
            <div className="xl:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/40">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-lg font-extrabold text-[#1A202C]">Upcoming</h4>
                <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-gray-600 uppercase tracking-tighter">View All</a>
              </div>

              <div className="space-y-6">
                 <div>
                   <p className="text-[9px] font-bold text-gray-400 mb-4 tracking-widest uppercase">Today</p>
                   <UpcomingItem icon={<FiZap />} title="Water Bill" status="Unsuccessfully" amount="Rs.-280" color="#5D26C1" />
                 </div>
                 <div>
                   <p className="text-[9px] font-bold text-gray-400 mb-4 tracking-widest uppercase">Tomorrow</p>
                   <div className="space-y-6">
                      <UpcomingItem icon={<FiBriefcase />} title="Salary Oct" status="Successfully" amount="Rs.+1200" color="#FF8A65" positive />
                      <UpcomingItem icon={<FiZap />} title="Electric Bill" status="Successfully" amount="Rs.-480" color="#00D7E4" />
                      <UpcomingItem icon={<FiFileText />} title="Jane transfers" status="Successfully" amount="Rs.+500" color="#FFD882" positive />
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// HELPER COMPONENTS
function SidebarLink({ icon, label, active = false }) {
  return (
    <div className={`flex items-center justify-between group cursor-pointer ${active ? "text-[#5D5FEF]" : "text-gray-400 hover:text-[#5D5FEF]"}`}>
      <div className="flex items-center gap-4">
        <span className="text-[20px]">{icon}</span>
        <span className="text-sm font-bold">{label}</span>
      </div>
      <FiChevronRight className={`transition-opacity ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
    </div>
  );
}

function InlineMetric({ title, value, change, bars, color }) {
  return (
    <div className="flex items-center gap-4 px-6 py-5">
      {/* Left: text info */}
      <div className="flex-shrink-0 min-w-[110px]">
        <h5 className="text-[11px] font-semibold text-gray-400 mb-1 whitespace-nowrap">{title}</h5>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[22px] font-extrabold text-[#1A202C] leading-none">{value}</span>
          <span className="text-[9px] font-extrabold bg-green-50 text-green-500 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
            {change} <FiArrowUpRight className="text-[9px]" />
          </span>
        </div>
        <p className="text-[9px] font-semibold text-gray-400">Current Month</p>
      </div>
      {/* Right: bar chart */}
      <div className="flex items-end gap-1.5 h-16 flex-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm transition-all"
            style={{
              height: `${h}%`,
              backgroundColor: i === bars.length - 1 ? color : "#EEF2F7",
              opacity: i === bars.length - 1 ? 1 : 0.7 + i * 0.04
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TransactionItem({ icon, label, amount, positive = false }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 border border-gray-100">
           {icon}
        </div>
        <span className="text-xs font-bold text-gray-700">{label}</span>
      </div>
      <span className={`text-xs font-extrabold ${positive ? "text-green-500" : "text-[#2D3748]"}`}>
        {positive ? "+" : ""}{amount}
      </span>
    </div>
  );
}

function UpcomingItem({ icon, title, status, amount, color, positive = false }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: color }}>
           {icon}
        </div>
        <div>
          <h5 className="text-xs font-bold text-[#1A202C] line-clamp-1">{title}</h5>
          <p className="text-[9px] text-gray-400 mt-0.5">{status}</p>
        </div>
      </div>
      <span className={`text-xs font-extrabold ${positive ? "text-green-500" : "text-[#E53E3E]"}`}>{amount}</span>
    </div>
  );
}

function FiArrowLeft() {
   return <FiArrowDownLeft className="text-green-500" />
}

function FiArrowRight() {
   return <FiArrowUpRight className="text-gray-400" />
}

export default Dashboard;
