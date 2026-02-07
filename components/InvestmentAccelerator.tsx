
import React, { useState } from 'react';
import { RiskProfile } from '../types';

export const InvestmentAccelerator: React.FC = () => {
  const [sip, setSip] = useState(500);
  const [years, setYears] = useState(10);

  // Growth calculation for Nifty 50 (Avg 12%)
  const calculateSIP = () => {
    const r = 0.12 / 12; // 12% annually
    const n = years * 12;
    const p = sip;
    const fv = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return Math.round(fv).toLocaleString('en-IN');
  };

  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-xl font-bold text-white">Investment Accelerator</h2>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Paisa into Wealth</p>
      </header>

      {/* SIP Starter Simulator */}
      <section className="bg-[#161B2E] p-8 rounded-[2.5rem] border border-gray-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-6 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-[#00C853]">SIP Simulator</h3>
          <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded-lg font-bold">NIFTY 50 (12%)</span>
        </div>

        <div className="text-center py-8 bg-black/40 rounded-3xl mb-8 border border-white/5">
          <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Your Corpus at Year {years}</p>
          <h4 className="text-4xl font-bold text-white tracking-tight">₹{calculateSIP()}</h4>
          <p className="text-[10px] text-[#00C853] font-bold mt-2 uppercase tracking-widest">Growth Machine Active</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
              <span>Monthly SIP</span>
              <span className="text-white">₹{sip}</span>
            </div>
            <input 
              type="range" min="500" max="10000" step="500" value={sip}
              onChange={e => setSip(parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#00C853]"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
              <span>Duration</span>
              <span className="text-white">{years} Years</span>
            </div>
            <input 
              type="range" min="1" max="30" step="1" value={years}
              onChange={e => setYears(parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Digital Gold Ledger */}
      <section className="bg-gradient-to-br from-[#FFD600]/20 to-transparent p-8 rounded-[2.5rem] border border-[#FFD600]/20">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-[#FFD600]">Digital Gold Ledger</h3>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Buy 24K from ₹10</p>
          </div>
          <span className="text-3xl">🪙</span>
        </div>
        
        <div className="bg-black/20 p-4 rounded-2xl mb-6 flex justify-between items-center border border-white/5">
          <div>
            <p className="text-[9px] text-gray-500 font-bold uppercase">Current Value</p>
            <p className="text-sm font-bold text-white">₹724.80</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-gray-500 font-bold uppercase">Weight</p>
            <p className="text-sm font-bold text-white">0.100 gm</p>
          </div>
        </div>

        <button className="w-full bg-[#FFD600] text-black font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest shadow-xl shadow-yellow-900/20 active:scale-95 transition-all">
          Invest In Gold
        </button>
      </section>

      {/* Market Basics Cards */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest px-2">Market Basics</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#161B2E] p-4 rounded-[1.5rem] border border-gray-800">
            <h4 className="text-xs font-bold text-white mb-1">Sensex/Nifty</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed">India's heartbeat. If top companies grow, you grow.</p>
          </div>
          <div className="bg-[#161B2E] p-4 rounded-[1.5rem] border border-gray-800">
            <h4 className="text-xs font-bold text-white mb-1">SEBI Rules</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed">The police of markets. They keep your money safe.</p>
          </div>
        </div>
      </section>

      {/* Risk Profile Selection */}
      <section className="p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-[2.5rem] text-center">
        <h4 className="text-xs font-bold text-indigo-100 mb-2">Identify Your Risk Vibe</h4>
        <p className="text-[9px] text-gray-500 font-bold uppercase mb-6 tracking-widest">Equity vs Debt vs FDs</p>
        <div className="flex justify-center space-x-2">
          {['Safe', 'Balanced', 'Aggressive'].map(risk => (
            <button key={risk} className="px-4 py-2 bg-[#161B2E] border border-gray-800 rounded-xl text-[9px] font-black uppercase text-gray-400 hover:text-white hover:border-[#00C853] transition-all">
              {risk}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
