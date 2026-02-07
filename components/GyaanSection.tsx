
import React from 'react';

export const GyaanSection: React.FC = () => {
  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-2xl font-black text-[#FFB800]">Finance Gyaan</h2>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Master Your Money Logic</p>
      </header>

      {/* Samosa Inflation Visual */}
      <div className="bg-[#161B2E] p-6 rounded-3xl border border-blue-900/10">
        <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center">
          <span className="mr-2">🥟</span> The Samosa Index
        </h3>
        <div className="flex justify-between items-end h-32 px-4">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#00D1FF] mb-2">₹5</span>
            <div className="w-12 bg-gray-800 rounded-t-lg h-8"></div>
            <span className="text-[10px] text-gray-500 font-black mt-2">2010</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#FFB800] mb-2">₹10</span>
            <div className="w-12 bg-[#FFB800]/40 rounded-t-lg h-16"></div>
            <span className="text-[10px] text-gray-500 font-black mt-2">2018</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#FF4D4D] mb-2">₹15+</span>
            <div className="w-12 bg-[#FF4D4D] rounded-t-lg h-24 shadow-lg shadow-red-500/20"></div>
            <span className="text-[10px] text-gray-500 font-black mt-2">2024</span>
          </div>
        </div>
        <p className="text-[10px] text-gray-500 text-center mt-6 leading-tight italic">
          "Inflation is why ₹100 today buys less than it did when you were a kid. Invest to stay ahead!"
        </p>
      </div>

      {/* Scam Alert Section */}
      <div className="bg-red-500/10 border-2 border-red-500/20 p-6 rounded-3xl">
        <h3 className="text-red-500 text-xs font-black uppercase mb-4 flex items-center">
          <span className="mr-2">🚨</span> Don't Get Scammed!
        </h3>
        <div className="space-y-3">
          <div className="bg-black/30 p-3 rounded-xl border border-red-500/10">
            <p className="text-[10px] font-black text-red-400 mb-1">Telegram "Double Money" Schemes</p>
            <p className="text-[10px] text-gray-400">If it sounds too good to be true, it's a scam. No one doubles money in 2 days.</p>
          </div>
          <div className="bg-black/30 p-3 rounded-xl border border-red-500/10">
            <p className="text-[10px] font-black text-red-400 mb-1">Chinese Loan Apps</p>
            <p className="text-[10px] text-gray-400">High interest and privacy risks. Use official banking apps only.</p>
          </div>
        </div>
      </div>

      {/* 50-30-20 Rule (Indian Student Version) */}
      <div className="bg-[#161B2E] p-6 rounded-3xl">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">The 50-30-20 Rule</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-1/2 h-4 bg-[#0066FF] rounded-l-full"></div>
            <div className="w-[30%] h-4 bg-[#FFB800]"></div>
            <div className="w-[20%] h-4 bg-[#00D1FF] rounded-r-full"></div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex justify-between text-[10px] font-bold">
              <span className="text-[#0066FF]">50% Needs: (Mess, Rent, Books)</span>
            </div>
            <div className="flex justify-between text-[10px] font-bold">
              <span className="text-[#FFB800]">30% Wants: (Zomato, Movies, Zara)</span>
            </div>
            <div className="flex justify-between text-[10px] font-bold">
              <span className="text-[#00D1FF]">20% Nivesh: (SIP, Gold, Bachat)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Future Gyaan Mock */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#00D1FF] p-6 rounded-3xl text-white">
        <span className="text-[10px] font-black bg-black/20 px-2 py-0.5 rounded uppercase">Coming Soon</span>
        <h4 className="text-lg font-black mt-2">Tax Basics (80C)</h4>
        <p className="text-xs opacity-90">How to save lakhs in tax when you get your first job offer.</p>
      </div>
    </div>
  );
};
