
import React from 'react';

export const IncomeTracker: React.FC = () => {
  const incomes = [
    { name: 'Internship Stipend', amount: '₹12,000', source: 'Google India', status: 'Credited' },
    { name: 'Freelance Design', amount: '₹3,500', source: 'Upwork', status: 'Pending' },
    { name: 'Math Tuitions', amount: '₹2,000', source: 'Private', status: 'Credited' }
  ];

  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-xl font-bold text-white">Side-Hustle Ledger</h2>
        <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">Income Generation</p>
      </header>

      <div className="bg-gradient-to-br from-[#1A237E] to-[#0D1117] p-8 rounded-[2.5rem] border border-indigo-500/30 text-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Total Earned (Sept)</p>
        <h3 className="text-4xl font-bold text-white mb-4">₹17,500</h3>
        <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 w-[65%] shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
        </div>
        <p className="text-[9px] text-indigo-300 mt-4 uppercase font-black">Goal: ₹25,000 to buy Laptop</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest px-2">Recent Stipends</h3>
        <div className="space-y-3">
          {incomes.map((inc, i) => (
            <div key={i} className="bg-[#161B2E] p-5 rounded-[2rem] border border-gray-800 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 font-bold">
                  ₹
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{inc.name}</h4>
                  <p className="text-[9px] text-gray-500 font-black uppercase">{inc.source}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-[#00C853]">{inc.amount}</p>
                <p className={`text-[8px] font-black uppercase ${inc.status === 'Pending' ? 'text-orange-500' : 'text-gray-500'}`}>{inc.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-3xl">
        <h4 className="text-xs font-bold text-emerald-400 mb-3 flex items-center">
          <span className="mr-2">💡</span> Tax Pro-Tip
        </h4>
        <p className="text-[10px] text-gray-400 leading-relaxed">
          As a student freelancer, you might qualify for <strong>Presumptive Taxation (44ADA)</strong>. This means only 50% of your income is taxed. Save this for your first professional year!
        </p>
      </div>
    </div>
  );
};
