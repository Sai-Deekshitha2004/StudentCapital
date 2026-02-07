
import React from 'react';
import { MOCK_BUDGETS } from '../constants';

export const BudgetSplitHub: React.FC<{ isBlur: boolean }> = ({ isBlur }) => {
  const handleSplit = () => {
    const text = encodeURIComponent("Hey! Paisa nikal! 💸 You owe me ₹240 for the Zomato order last night. G-Pay kar de!");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-xl font-black">Hostel & PG Manager</h2>
        <p className="text-xs text-gray-500">Managing the essentials first.</p>
      </header>

      {/* PG Progress Card */}
      <div className="bg-gradient-to-br from-[#161B2E] to-[#0A0E1A] p-6 rounded-3xl border border-blue-900/30">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🏢</span>
            <h4 className="font-bold">Monthly PG Dues</h4>
          </div>
          <span className="text-[10px] font-black text-[#00D1FF] bg-[#00D1FF]/10 px-2 py-1 rounded">PENDING</span>
        </div>
        <div className="flex justify-between text-xs mb-2">
          <span className="text-gray-400">Rent + Mess</span>
          <span className={`font-bold ${isBlur ? 'blur-sm' : ''}`}>₹12,000 / ₹15,000</span>
        </div>
        <div className="h-2 bg-black/40 rounded-full overflow-hidden">
          <div className="h-full bg-[#0066FF] w-[80%]"></div>
        </div>
      </div>

      {/* WhatsApp Splitter Tool */}
      <div className="bg-[#FFB800] p-6 rounded-3xl text-black relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
        </div>
        <h3 className="font-black text-lg mb-1">Smart Splitter</h3>
        <p className="text-xs font-bold mb-6 opacity-80 uppercase tracking-widest">Split Zomato or Fuel Costs</p>
        
        <div className="bg-black/10 p-4 rounded-2xl mb-6">
          <div className="flex justify-between text-sm font-bold border-b border-black/10 pb-2 mb-2">
            <span>Last Gedi Fuel</span>
            <span>₹800</span>
          </div>
          <p className="text-[10px] font-black uppercase">4 Friends = ₹200 each</p>
        </div>

        <button 
          onClick={handleSplit}
          className="w-full bg-black text-white font-black py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-xl active:scale-95 transition-all"
        >
          <span className="text-xl">💬</span>
          <span>SEND WHATSAPP REMINDER</span>
        </button>
      </div>

      {/* Subscription Traps */}
      <div className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Subscription Traps</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Hotstar', price: '₹499/y', date: 'Oct 12', color: '#0066FF' },
            { name: 'SonyLIV', price: '₹299/q', date: 'Sep 24', color: '#FFB800' }
          ].map((sub, i) => (
            <div key={i} className="bg-[#161B2E] p-4 rounded-2xl border border-blue-900/10">
              <div className="w-8 h-8 rounded-full mb-3" style={{ backgroundColor: sub.color }}></div>
              <h4 className="font-bold text-sm">{sub.name}</h4>
              <p className="text-[10px] font-black text-gray-500 mb-2">{sub.price}</p>
              <p className="text-[10px] font-bold text-[#00D1FF]">Renew: {sub.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
