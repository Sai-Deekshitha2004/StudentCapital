
import React from 'react';
import { COLORS, DAILY_TIPS } from '../constants';

interface DashboardProps {
  isBlur: boolean;
  dailyBudget: number;
}

export const Dashboard: React.FC<DashboardProps> = ({ isBlur, dailyBudget }) => {
  const randomTip = DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)];

  return (
    <div className="space-y-6">
      {/* Burn Rate Widget */}
      <div className="bg-[#1E1E1E] rounded-3xl p-8 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-4 right-6 flex items-center space-x-1">
          <span className="text-xs font-bold text-gray-500">Vibe Check:</span>
          <span className="text-sm">🚀 On Track</span>
        </div>
        
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Background Ring */}
          <svg className="absolute w-full h-full transform -rotate-90">
            <circle cx="96" cy="96" r="80" stroke="#2a2a2a" strokeWidth="12" fill="transparent" />
            <circle 
              cx="96" cy="96" r="80" stroke="#39FF14" strokeWidth="12" fill="transparent" 
              strokeDasharray={2 * Math.PI * 80}
              strokeDashoffset={2 * Math.PI * 80 * (1 - 0.65)}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="text-center z-10">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-1">Spendable</span>
            <span className={`text-4xl font-extrabold block ${isBlur ? 'blur-amount' : ''}`}>
              ${dailyBudget.toFixed(2)}
            </span>
            <span className="text-gray-500 text-[10px] font-medium block mt-1">Left for today</span>
          </div>
        </div>

        <div className="mt-4 flex space-x-6">
          <div className="text-center">
            <p className="text-[10px] text-gray-500 font-bold uppercase">Weekly Save</p>
            <p className="text-[#B19CD9] font-bold">$42.00</p>
          </div>
          <div className="w-[1px] bg-gray-800 h-8 self-center"></div>
          <div className="text-center">
            <p className="text-[10px] text-gray-500 font-bold uppercase">Debt Free</p>
            <p className="text-[#39FF14] font-bold">100%</p>
          </div>
        </div>
      </div>

      {/* Daily Tip Pop-up */}
      <div className="bg-[#B19CD9]/10 border border-[#B19CD9]/20 rounded-2xl p-4 flex items-start space-x-4">
        <div className="bg-[#B19CD9] p-2 rounded-xl text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
        </div>
        <div>
          <h4 className="text-[#B19CD9] text-xs font-bold uppercase mb-1">Knowledge Drop</h4>
          <p className="text-sm text-gray-300 leading-tight italic">"{randomTip}"</p>
        </div>
      </div>

      {/* Quick History Mock */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Recent Burn</h3>
        {[
          { icon: '☕', name: 'Starbucks', amount: '-$4.50', time: '2h ago', category: 'Social' },
          { icon: '🛒', name: 'Campus Store', amount: '-$12.20', time: 'Yesterday', category: 'Food' },
          { icon: '📈', name: 'Round-up Deposit', amount: '+$0.50', time: 'Yesterday', category: 'Investing', positive: true },
        ].map((item, i) => (
          <div key={i} className="bg-[#1E1E1E] p-4 rounded-2xl flex items-center justify-between border border-transparent hover:border-gray-800 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#2a2a2a] rounded-xl flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-[10px] text-gray-500 font-medium uppercase">{item.category} • {item.time}</p>
              </div>
            </div>
            <p className={`font-bold ${item.positive ? 'text-[#39FF14]' : 'text-white'} ${isBlur ? 'blur-amount' : ''}`}>
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
