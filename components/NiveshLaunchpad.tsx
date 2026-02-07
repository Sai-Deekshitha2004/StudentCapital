
import React, { useState } from 'react';

export const NiveshLaunchpad: React.FC = () => {
  const [sipAmount, setSipAmount] = useState(500);

  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-2xl font-black text-[#0066FF]">Nivesh Launchpad</h2>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Growth Starts with ₹10</p>
      </header>

      {/* SIP Challenge Card */}
      <div className="bg-[#161B2E] p-6 rounded-3xl border-2 border-[#0066FF]/30">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-black uppercase tracking-widest">The ₹500 SIP Challenge</h3>
          <span className="text-[10px] bg-[#00D1FF]/10 text-[#00D1FF] px-2 py-1 rounded">NIFTY 50 📈</span>
        </div>
        
        <div className="text-center bg-black/40 py-8 rounded-3xl mb-6">
          <p className="text-[10px] text-gray-500 font-black uppercase mb-1">In 10 Years, ₹{sipAmount}/mo becomes</p>
          <p className="text-4xl font-black text-[#0066FF]">₹1.2 Lakhs</p>
          <p className="text-[10px] text-[#00D1FF] font-bold mt-2">Assuming 12% returns</p>
        </div>

        <input 
          type="range" min="500" max="5000" step="500" 
          value={sipAmount} 
          onChange={(e) => setSipAmount(Number(e.target.value))}
          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#0066FF]"
        />
        <div className="flex justify-between mt-2 text-[10px] font-black text-gray-500">
          <span>₹500</span>
          <span>₹5000</span>
        </div>
      </div>

      {/* Digital Gold Mock */}
      <div className="bg-gradient-to-br from-[#FFB800]/20 to-transparent p-6 rounded-3xl border border-[#FFB800]/20">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-black text-[#FFB800]">Digital Gold</h3>
            <p className="text-xs text-gray-500">Buy 24K pure gold for just ₹10</p>
          </div>
          <span className="text-2xl">🪙</span>
        </div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex-1 bg-black/40 p-3 rounded-2xl border border-white/5">
            <p className="text-[10px] text-gray-500 font-bold uppercase">Gold Price</p>
            <p className="font-bold text-sm">₹7,240 / gm</p>
          </div>
          <button className="bg-[#FFB800] text-black font-black px-6 py-3 rounded-2xl text-xs uppercase tracking-widest hover:scale-105 transition-all">
            Buy Now
          </button>
        </div>
      </div>

      {/* Battle Card: FD vs Mutual Fund */}
      <div className="bg-[#161B2E] p-6 rounded-3xl border border-gray-800">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Paisa Battle ⚔️</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/40 p-4 rounded-2xl border-l-4 border-l-gray-600">
            <h4 className="font-bold text-xs mb-1">Grandpa's FD</h4>
            <p className="text-lg font-black text-gray-400">~6.5%</p>
            <p className="text-[8px] text-gray-600 font-bold uppercase">Barely beats inflation</p>
          </div>
          <div className="bg-[#0066FF]/10 p-4 rounded-2xl border-l-4 border-l-[#0066FF]">
            <h4 className="font-bold text-xs mb-1">Mutual Fund</h4>
            <p className="text-lg font-black text-[#0066FF]">~12-15%</p>
            <p className="text-[8px] text-[#0066FF] font-bold uppercase">Wealth Multiplier</p>
          </div>
        </div>
      </div>

      {/* Emergency Fund Card */}
      <div className="p-6 bg-[#00D1FF]/5 border-2 border-dashed border-[#00D1FF]/30 rounded-3xl text-center">
        <h4 className="text-lg font-black mb-1">"Guilt-Free" Pot</h4>
        <p className="text-xs text-gray-500 mb-6">Save 3 months of pocket money before buying stocks.</p>
        <div className="flex justify-center -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-10 h-10 bg-[#00D1FF] rounded-full border-4 border-[#0A0E1A] flex items-center justify-center text-xs font-black text-black">₹</div>
          ))}
        </div>
      </div>
    </div>
  );
};
