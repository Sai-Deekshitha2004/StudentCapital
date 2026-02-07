
import React from 'react';

export const KnowledgeHub: React.FC = () => {
  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-xl font-bold text-white">Knowledge Hub</h2>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Skill Up, Save Up</p>
      </header>

      {/* The Biryani Inflation Tool */}
      <section className="bg-[#161B2E] p-8 rounded-[2.5rem] border border-gray-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="text-5xl">🍗</span>
        </div>
        <h3 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center">
          The Biryani Index <span className="ml-2 text-[9px] text-gray-500 normal-case">(Inflation Factor)</span>
        </h3>
        
        <div className="flex justify-between items-end h-32 px-4 mb-6">
          <div className="flex flex-col items-center">
            <p className="text-[9px] font-black text-[#00C853] mb-2">₹60</p>
            <div className="w-12 bg-gray-800 rounded-t-xl h-10 group-hover:h-8 transition-all duration-700"></div>
            <p className="text-[8px] text-gray-500 font-black mt-2 uppercase">2014</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[9px] font-black text-[#FFD600] mb-2">₹120</p>
            <div className="w-12 bg-gray-800/60 rounded-t-xl h-20 group-hover:h-16 transition-all duration-700"></div>
            <p className="text-[8px] text-gray-500 font-black mt-2 uppercase">2019</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[9px] font-black text-[#FF5252] mb-2">₹250+</p>
            <div className="w-12 bg-gradient-to-t from-red-600 to-red-400 rounded-t-xl h-28 group-hover:h-32 transition-all duration-700 shadow-lg shadow-red-500/20"></div>
            <p className="text-[8px] text-gray-500 font-black mt-2 uppercase">2024</p>
          </div>
        </div>
        
        <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
          <p className="text-[10px] text-gray-400 leading-relaxed italic">
            "Your money's buying power is shrinking. Keeping ₹200 in a cupboard is actually losing money. You must invest to beat the Biryani Index!"
          </p>
        </div>
      </section>

      {/* Tax 101 Guide */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest px-2">First Job Readiness</h3>
        <div className="bg-gradient-to-br from-[#3F51B5] to-[#1A237E] p-8 rounded-[2.5rem] text-white">
          <div className="flex items-center space-x-3 mb-4">
            <span className="p-2 bg-white/10 rounded-xl">📄</span>
            <h4 className="text-sm font-bold">Tax 101: What's a CTC?</h4>
          </div>
          <p className="text-[10px] opacity-80 leading-relaxed mb-6">
            Understand Income Tax slabs, GST, and how to save lakhs with 80C deductions before you sign your first offer letter.
          </p>
          <button className="w-full py-3 bg-white text-indigo-900 font-black text-[10px] uppercase tracking-widest rounded-2xl active:scale-95 transition-all">
            Unlock Guide
          </button>
        </div>
      </section>

      {/* Cyber-Safety Module */}
      <section className="bg-red-500/5 border-2 border-dashed border-red-500/20 p-8 rounded-[2.5rem] relative overflow-hidden">
        <h3 className="text-xs font-black text-red-400 uppercase tracking-widest mb-4 flex items-center">
          <span className="mr-2">🛡️</span> Cyber-Safety Alert
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-1 h-1 bg-red-400 rounded-full mt-1"></div>
            <p className="text-[10px] text-gray-400"><strong>UPI Phishing:</strong> Never enter your PIN to *receive* money. PIN is only for sending.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-1 h-1 bg-red-400 rounded-full mt-1"></div>
            <p className="text-[10px] text-gray-400"><strong>Loan Apps:</strong> Avoid unofficial apps promising "Quick 5k" – they often charge 400%+ interest.</p>
          </div>
        </div>
      </section>

      {/* Rule of 72 Visual */}
      <div className="bg-[#161B2E] p-6 rounded-[2rem] border border-gray-800 text-center">
        <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">The Pro Rule</h4>
        <h2 className="text-xl font-bold text-[#00C853] mb-1">The Rule of 72</h2>
        <p className="text-[10px] text-gray-400 italic">Divide 72 by interest rate = Years to double your money.</p>
      </div>
    </div>
  );
};
