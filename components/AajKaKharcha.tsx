
import React from 'react';
import { COLORS, DAILY_TIPS } from '../constants';

export const AajKaKharcha: React.FC<{ isBlur: boolean }> = ({ isBlur }) => {
  const randomTip = DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)];
  const dailyLimit = 500;
  const spentToday = 340;

  return (
    <div className="space-y-6">
      {/* Daily Aukaat Meter */}
      <div className="bg-[#161B2E] rounded-3xl p-6 border border-blue-900/20 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Aaj Ki Aukaat (Limit)</h3>
          <span className="text-[10px] bg-[#FFB800]/10 text-[#FFB800] px-2 py-1 rounded-full font-bold">Tight Day! 📉</span>
        </div>

        <div className="text-center mb-6">
          <p className={`text-4xl font-black ${isBlur ? 'blur-md' : ''}`}>₹{dailyLimit - spentToday}</p>
          <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">Left for today</p>
        </div>

        <div className="relative h-3 bg-black/40 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0066FF] to-[#00D1FF] transition-all duration-1000"
            style={{ width: `${(spentToday / dailyLimit) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-500">
          <span>Spent: ₹{spentToday}</span>
          <span>Max: ₹{dailyLimit}</span>
        </div>
      </div>

      {/* SMS Sync Alert */}
      <div className="bg-[#00D1FF]/5 border border-[#00D1FF]/20 rounded-2xl p-4 flex items-center space-x-4">
        <div className="text-2xl">📩</div>
        <div>
          <h4 className="text-[#00D1FF] text-[10px] font-black uppercase mb-0.5">SMS Sync Active</h4>
          <p className="text-xs text-gray-400 leading-tight">Mock: Detected ₹40 UPI to 'Sharma Chai Wala'. Categorized as Social.</p>
        </div>
      </div>

      {/* Micro-Spend Tracker */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Micro-Leaks (₹10-₹50)</h3>
          <span className="text-[10px] text-red-400 font-bold">₹120 Total</span>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: 'Samosa & Chai', amount: '₹35', time: '11:30 AM', icon: '☕' },
            { name: 'Auto to Metro', amount: '₹20', time: '09:00 AM', icon: '🛺' },
            { name: 'Xerox/Printout', amount: '₹15', time: 'Yesterday', icon: '📄' }
          ].map((item, i) => (
            <div key={i} className="bg-[#161B2E] p-4 rounded-2xl flex items-center justify-between group hover:border-[#0066FF]/40 border border-transparent transition-all">
              <div className="flex items-center space-x-3">
                <span className="text-xl bg-black/40 p-2 rounded-xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">{item.time}</p>
                </div>
              </div>
              <p className={`font-black ${isBlur ? 'blur-sm' : ''}`}>{item.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Card */}
      <div className="bg-[#FFB800]/5 border border-[#FFB800]/20 p-5 rounded-3xl">
        <p className="text-xs text-gray-300 italic">“{randomTip}”</p>
      </div>
    </div>
  );
};
