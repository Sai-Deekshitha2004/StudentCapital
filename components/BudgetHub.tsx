
import React from 'react';
import { MOCK_BUDGETS, COLORS } from '../constants';

interface BudgetHubProps {
  isBlur: boolean;
}

export const BudgetHub: React.FC<BudgetHubProps> = ({ isBlur }) => {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-xl font-bold">Monthly Limits</h2>
          <p className="text-xs text-gray-500">You've spent 72% of your budget</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 font-bold uppercase">Remaining</p>
          <p className={`text-lg font-extrabold text-[#39FF14] ${isBlur ? 'blur-amount' : ''}`}>$154.20</p>
        </div>
      </header>

      {/* Dynamic Alert Mock */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-center space-x-3 animate-pulse">
        <div className="bg-red-500 p-2 rounded-lg text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        </div>
        <p className="text-xs font-semibold text-red-200">
          Warning: You've spent 90% of your <span className="underline">Coffee</span> budget with 10 days left in the month.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 gap-4">
        {MOCK_BUDGETS.map((cat) => {
          const percent = (cat.spent / cat.limit) * 100;
          return (
            <div key={cat.id} className="bg-[#1E1E1E] p-5 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all cursor-pointer group">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm">{cat.name}</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Budget: ${cat.limit}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-bold ${isBlur ? 'blur-amount' : ''}`}>${cat.spent}</span>
                  <span className="text-xs text-gray-500 font-bold ml-1">Spent</span>
                </div>
              </div>
              
              <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full transition-all duration-500 group-hover:brightness-110"
                  style={{ 
                    width: `${percent}%`, 
                    backgroundColor: percent > 90 ? COLORS.danger : cat.color 
                  }}
                />
              </div>
              <div className="mt-2 flex justify-between">
                <span className="text-[10px] text-gray-500 font-bold uppercase">{Math.round(percent)}% used</span>
                <span className="text-[10px] text-[#B19CD9] font-bold uppercase hover:underline">Adjust Limit →</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics Hook */}
      <div className="p-6 bg-[#39FF14]/5 rounded-3xl border border-[#39FF14]/20 flex justify-between items-center">
        <div>
          <h4 className="text-sm font-bold">Smart Breakdown</h4>
          <p className="text-xs text-gray-500">See where every dollar went.</p>
        </div>
        <button className="bg-[#39FF14] text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-[#39FF14]/20">
          View Stats
        </button>
      </div>
    </div>
  );
};
