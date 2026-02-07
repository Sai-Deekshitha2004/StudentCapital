
import React, { useState } from 'react';
import { COLORS } from '../constants';
import { RiskProfile } from '../types';

export const InvestorsLaunchpad: React.FC = () => {
  const [monthlyInvest, setMonthlyInvest] = useState(50);
  const [years, setYears] = useState(10);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [riskResult, setRiskResult] = useState<RiskProfile | null>(null);

  // Simplified compound interest logic for the simulator
  // A = P(1 + r/n)^(nt) + PMT * [((1 + r/n)^(nt) - 1) / (r/n)]
  const calculateGrowth = () => {
    const r = 0.08; // 8% avg index fund return
    const n = 12; // monthly
    const pmt = monthlyInvest;
    const t = years;
    const ratePerPeriod = r / n;
    const totalPeriods = n * t;
    const futureValue = pmt * ((Math.pow(1 + ratePerPeriod, totalPeriods) - 1) / ratePerPeriod);
    return Math.round(futureValue).toLocaleString();
  };

  const quizQuestions = [
    { q: "If your $100 drops to $80 in a week, you:", options: ["Panic Sell 😱", "Do Nothing 😐", "Buy More! 🤑"] },
    { q: "Your goal for this money is:", options: ["Beer Money 🍺", "First Car 🚗", "Retirement 👴"] },
    { q: "How much do you know about ETFs?", options: ["Nothing ❓", "A Little 🤏", "Pro level 😎"] }
  ];

  const handleQuizAnswer = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      const results = [RiskProfile.CONSERVATIVE, RiskProfile.MODERATE, RiskProfile.AGGRESSIVE];
      setRiskResult(results[Math.floor(Math.random() * 3)]);
      setShowQuiz(false);
    }
  };

  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-2xl font-black text-[#B19CD9]">Investor's Launchpad</h2>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Turn Spare Change into Wealth</p>
      </header>

      {/* Simulator Card */}
      <div className="bg-[#1E1E1E] p-6 rounded-3xl border-2 border-[#39FF14]/30 shadow-xl shadow-[#39FF14]/5">
        <h3 className="text-sm font-bold uppercase mb-6 flex items-center">
          <span className="mr-2">📈</span> Compound Simulator
        </h3>
        
        <div className="space-y-6">
          <div className="text-center bg-black/40 py-6 rounded-2xl">
            <p className="text-[10px] text-gray-500 font-bold uppercase">Estimated Future Nest Egg</p>
            <p className="text-4xl font-black text-[#39FF14] tracking-tighter">${calculateGrowth()}</p>
            <p className="text-[10px] text-gray-500 font-medium mt-1">Based on 8% avg. annual return</p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold uppercase mb-2">
                <span className="text-gray-400">Monthly Deposit</span>
                <span className="text-[#B19CD9]">${monthlyInvest}</span>
              </div>
              <input 
                type="range" min="10" max="500" step="10" 
                value={monthlyInvest} 
                onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#39FF14]"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold uppercase mb-2">
                <span className="text-gray-400">Time Horizon</span>
                <span className="text-[#B19CD9]">{years} Years</span>
              </div>
              <input 
                type="range" min="1" max="40" step="1" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#39FF14]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Micro-Investing Mockup */}
      <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2a2a2a] p-6 rounded-3xl border border-gray-800 relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#39FF14]/10 rounded-full blur-3xl group-hover:bg-[#39FF14]/20 transition-all"></div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold uppercase">🚀 Micro-Roundups</h3>
          <div className="flex h-5 w-10 bg-[#39FF14]/20 rounded-full relative items-center cursor-pointer">
            <div className="absolute right-1 w-3 h-3 bg-[#39FF14] rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-black/50 p-3 rounded-2xl">
            <p className="text-xs text-gray-500 font-bold uppercase">Last Spend</p>
            <p className="text-lg font-bold text-white">$3.60</p>
          </div>
          <div className="text-xl">➔</div>
          <div className="bg-[#39FF14]/10 p-3 rounded-2xl border border-[#39FF14]/20">
            <p className="text-xs text-[#39FF14] font-bold uppercase">Invested</p>
            <p className="text-lg font-bold text-[#39FF14]">+$0.40</p>
          </div>
        </div>
        <p className="text-[10px] text-gray-500 leading-tight">Your $3.60 coffee just bought a slice of the S&P 500 Index Fund. Smart move!</p>
      </div>

      {/* Learn-to-Earn Modules */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">The "Where to Start" Guide</h3>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-[#1E1E1E] p-5 rounded-2xl border border-l-4 border-l-[#39FF14] border-gray-800">
            <div className="flex items-center mb-2">
              <span className="bg-[#39FF14] text-black text-[10px] font-black px-2 py-0.5 rounded mr-2">LVL 1</span>
              <h4 className="font-bold text-sm">Emergency Fund</h4>
            </div>
            <p className="text-xs text-gray-400">Save your first $500. This is your "oh-no" money. Keep it in cash or a regular savings account.</p>
          </div>

          <div className="bg-[#1E1E1E] p-5 rounded-2xl border border-l-4 border-l-[#B19CD9] border-gray-800">
            <div className="flex items-center mb-2">
              <span className="bg-[#B19CD9] text-black text-[10px] font-black px-2 py-0.5 rounded mr-2">LVL 2</span>
              <h4 className="font-bold text-sm">High-Yield Savings (HYSA)</h4>
            </div>
            <p className="text-xs text-gray-400">Make your money work while you sleep. Switch to an account paying 4-5% interest instead of 0%.</p>
          </div>

          <div className="bg-[#1E1E1E] p-5 rounded-2xl border border-l-4 border-l-[#39FF14] border-gray-800">
            <div className="flex items-center mb-2">
              <span className="bg-[#39FF14] text-black text-[10px] font-black px-2 py-0.5 rounded mr-2">LVL 3</span>
              <h4 className="font-bold text-sm">Index Funds & ETFs</h4>
            </div>
            <p className="text-xs text-gray-400">The "Set it and Forget it" strategy. Buy tiny pieces of the 500 biggest companies in the US.</p>
          </div>
        </div>
      </div>

      {/* Risk Assessment Quiz Trigger */}
      <div className="bg-[#B19CD9]/10 border-2 border-dashed border-[#B19CD9]/30 p-8 rounded-3xl text-center">
        {riskResult ? (
          <div>
            <span className="text-4xl mb-4 block">🔥</span>
            <h4 className="text-lg font-bold">You are an {riskResult} Investor</h4>
            <p className="text-xs text-gray-400 mt-2">We've tailored your dashboard to match your profile.</p>
            <button 
              onClick={() => setRiskResult(null)}
              className="mt-4 text-[#B19CD9] text-[10px] font-bold uppercase tracking-widest underline"
            >
              Retake Quiz
            </button>
          </div>
        ) : (
          <div>
            <h4 className="text-lg font-bold mb-2 text-[#B19CD9]">Find Your Investing Vibe</h4>
            <p className="text-xs text-gray-500 mb-6">Take our fun 30-second quiz to build your custom portfolio.</p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="w-full bg-[#B19CD9] text-black font-black py-4 rounded-2xl shadow-lg shadow-[#B19CD9]/20 hover:scale-105 transition-transform"
            >
              START QUIZ
            </button>
          </div>
        )}
      </div>

      {/* Red Flags Section */}
      <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-3xl">
        <h3 className="text-red-500 text-xs font-black uppercase mb-3 flex items-center">
          <span className="mr-2">🚩</span> Red Flags Section
        </h3>
        <ul className="space-y-3 text-xs text-gray-400">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span> 
            <span><strong>Meme Coins:</strong> It's gambling, not investing. 99% of them go to zero.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span> 
            <span><strong>"Day Trading":</strong> Most pros lose money doing this. Students should focus on long-term growth.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">•</span> 
            <span><strong>Influencer Tips:</strong> If they're showing off a rented Lambo, don't trust their crypto advice.</span>
          </li>
        </ul>
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-[#1E1E1E] w-full max-w-sm rounded-3xl p-8 border border-gray-800 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Question {quizStep + 1}/3</span>
              <button onClick={() => setShowQuiz(false)} className="text-gray-500 hover:text-white">✕</button>
            </div>
            <h3 className="text-xl font-bold mb-8 leading-tight">{quizQuestions[quizStep].q}</h3>
            <div className="space-y-4">
              {quizQuestions[quizStep].options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={handleQuizAnswer}
                  className="w-full text-left bg-black/40 hover:bg-[#B19CD9]/20 p-5 rounded-2xl border border-gray-800 hover:border-[#B19CD9]/50 transition-all font-bold text-sm"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
