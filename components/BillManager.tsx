
import React from 'react';
import { MOCK_BUDGETS } from '../constants';

export const BillManager: React.FC<{ isBlur: boolean }> = ({ isBlur }) => {
  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-xl font-bold text-white">Expense Manager</h2>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Audit & Split</p>
      </header>

      {/* Subscription Audit */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest px-2">Subscription Audit</h3>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: 'Hotstar VIP', price: '₹499', period: 'Annual', next: '24 Sep', icon: '🏰', color: '#1a237e' },
            { name: 'Zomato Gold', price: '₹149', period: 'Monthly', next: '10 Oct', icon: '🛵', color: '#b71c1c' },
            { name: 'Jio Data Plan', price: '₹299', period: '28 Days', next: 'In 3 Days', icon: '📶', color: '#0d47a1' }
          ].map((sub, i) => (
            <div key={i} className="bg-[#161B2E] p-5 rounded-[2rem] border border-gray-800 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner" style={{ backgroundColor: sub.color }}>
                  {sub.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{sub.name}</h4>
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-tighter">{sub.period} • Next: {sub.next}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-black ${isBlur ? 'blur-sm' : ''}`}>{sub.price}</p>
                <button className="text-[8px] text-[#00C853] font-black uppercase tracking-widest mt-1">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Social Splitter */}
      <section className="bg-gradient-to-br from-[#3F51B5] to-[#1A237E] p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-900/40 relative overflow-hidden">
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <h3 className="text-lg font-bold mb-1 flex items-center">
          Group Splitter <span className="ml-2 text-xs font-normal opacity-70">Goa/Dinner/Café</span>
        </h3>
        <p className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-6">Split bills like a pro</p>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/5">
            <div>
              <p className="text-[9px] font-black uppercase opacity-60">Last Trip Expense</p>
              <h4 className="text-sm font-bold">Wayside Café Dinner</h4>
            </div>
            <p className="text-lg font-black">₹1,840</p>
          </div>
          <div className="flex justify-between text-[10px] font-bold px-2">
            <span>4 People</span>
            <span className="text-[#00C853]">₹460 each</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 bg-white text-[#3F51B5] font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all">
            Generate UPI Link
          </button>
          <button className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </button>
        </div>
      </section>

      {/* Relatable Category Tags */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest px-2">Quick Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['Campus Mess', 'Weekend Socials', 'Exam Fees', 'Maggi/Canteen', 'Auto/Rickshaw'].map(tag => (
            <span key={tag} className="px-4 py-2 bg-[#161B2E] border border-gray-800 rounded-full text-[10px] font-bold text-gray-400">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
