
import React from 'react';
import { COLORS, DAILY_TIPS } from '../constants';

export const ActiveTracker: React.FC<{ isBlur: boolean }> = ({ isBlur }) => {
  const dailyAllowance = 350;
  const spent = 120;
  const percent = (spent / dailyAllowance) * 100;

  return (
    <div className="space-y-6">
      {/* Allowance Widget */}
      <div className="bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-[2.5rem] p-8 border border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C853]/5 rounded-full blur-3xl"></div>
        
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="#1f2937" strokeWidth="8" fill="transparent" />
              <circle 
                cx="80" cy="80" r="70" stroke="#00C853" strokeWidth="8" fill="transparent" 
                strokeDasharray={2 * Math.PI * 70}
                strokeDashoffset={2 * Math.PI * 70 * (1 - percent/100)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-in-out"
              />
            </svg>
            <div className="text-center z-10">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Today's Left</p>
              <h2 className={`text-3xl font-bold ${isBlur ? 'blur-md' : ''}`}>₹{dailyAllowance - spent}</h2>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-8 w-full">
            <div className="text-center">
              <p className="text-[9px] text-gray-500 font-bold uppercase mb-1 tracking-widest">Bank Balance</p>
              <p className={`text-sm font-bold ${isBlur ? 'blur-sm' : ''}`}>₹12,450</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-gray-500 font-bold uppercase mb-1 tracking-widest">Disposable</p>
              <p className={`text-sm font-bold text-[#00C853] ${isBlur ? 'blur-sm' : ''}`}>₹2,800</p>
            </div>
          </div>
        </div>
      </div>

      {/* UPI Micro-Spend Summary */}
      <div className="space-y-4">
        <div className="flex justify-between items-end px-2">
          <div>
            <h3 className="text-sm font-black text-white">UPI Micro-Spends</h3>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">₹10 – ₹100 small leaks</p>
          </div>
          <span className="text-xs font-bold text-[#FF5252]">High Frequency!</span>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Irani Chai/Coffee', amount: '₹15', category: 'Snacks', date: '12:45 PM' },
            { name: 'Oatmeal Maggi', amount: '₹40', category: 'Food', date: '11:20 AM' },
            { name: 'Local Auto (Campus)', amount: '₹20', category: 'Commute', date: '09:10 AM' }
          ].map((tx, i) => (
            <div key={i} className="bg-[#161B22] p-4 rounded-3xl border border-gray-800/50 flex items-center justify-between group hover:border-[#3F51B5]/50 transition-all">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">{tx.name}</h4>
                  <p className="text-[9px] text-gray-500 font-black uppercase">{tx.category} • {tx.date}</p>
                </div>
              </div>
              <p className={`text-sm font-black text-white ${isBlur ? 'blur-sm' : ''}`}>₹{tx.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Motivation */}
      <div className="bg-indigo-600/10 border border-indigo-500/20 p-5 rounded-[2rem] flex items-center space-x-4">
        <div className="text-2xl">⚡</div>
        <p className="text-xs text-indigo-100 italic leading-relaxed">
          "{DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)]}"
        </p>
      </div>
    </div>
  );
};
