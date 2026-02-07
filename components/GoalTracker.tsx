
import React, { useState } from 'react';
import { MOCK_GOALS, COLORS } from '../constants';

interface GoalTrackerProps {
  isBlur: boolean;
}

export const GoalTracker: React.FC<GoalTrackerProps> = ({ isBlur }) => {
  const [goals, setGoals] = useState(MOCK_GOALS);
  const [sacrificeImpact, setSacrificeImpact] = useState<string | null>(null);

  const calculateSacrifice = () => {
    // Mock calculation logic
    setSacrificeImpact("Skip your next 3 coffees? Your MacBook goal finishes 5 days earlier! 🚀");
    setTimeout(() => setSacrificeImpact(null), 5000);
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black">Goal Tracker</h2>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Visualizing Your Future</p>
        </div>
        <button className="bg-[#1E1E1E] p-3 rounded-2xl text-[#39FF14] border border-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>
      </header>

      {/* Main Goal Progress */}
      <div className="space-y-6">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          return (
            <div key={goal.id} className="bg-[#1E1E1E] p-6 rounded-3xl border border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-lg">{goal.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">Deadline: {goal.deadline}</p>
                </div>
                <div className="text-right">
                  {/* Fixed blur-amount to blur-md and currency to Rupee */}
                  <p className={`text-xl font-black text-[#39FF14] ${isBlur ? 'blur-md' : ''}`}>
                    ₹{goal.current}
                  </p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">of ₹{goal.target}</p>
                </div>
              </div>

              {/* Progress Bar with Milestone Markers */}
              <div className="relative pt-2 pb-6">
                <div className="w-full h-4 bg-black/40 rounded-full overflow-hidden border border-gray-800">
                  <div 
                    className="h-full bg-gradient-to-r from-[#39FF14] to-[#B19CD9] transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-black uppercase">
                  <span>Start</span>
                  <span>50%</span>
                  <span>Goal</span>
                </div>
              </div>

              {/* Sacrifice Calculator Tool */}
              <button 
                onClick={calculateSacrifice}
                className="w-full py-3 bg-[#B19CD9]/10 border border-[#B19CD9]/20 rounded-xl text-[#B19CD9] text-xs font-black uppercase tracking-widest hover:bg-[#B19CD9]/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>☕ Sacrifice Calculator</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Sacrifice Popover/Overlay Notification */}
      {sacrificeImpact && (
        <div className="fixed top-24 left-6 right-6 bg-[#39FF14] text-black p-4 rounded-2xl shadow-2xl z-50 flex items-center space-x-4 animate-in slide-in-from-top duration-500">
          <div className="text-2xl">💡</div>
          <p className="text-sm font-bold leading-tight">{sacrificeImpact}</p>
        </div>
      )}

      {/* Student Advantage Tip */}
      <div className="bg-gradient-to-r from-[#121212] to-[#1E1E1E] border-2 border-[#B19CD9]/20 p-8 rounded-3xl text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2">
          <span className="text-2xl animate-bounce inline-block">⏳</span>
        </div>
        <h3 className="text-[#B19CD9] font-black text-sm uppercase tracking-widest mb-4">The Student Advantage</h3>
        <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">
          "Time is your superpower. ₹1 invested at 20 is worth more than ₹2 invested at 30."
        </p>
        <div className="flex justify-center items-end space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-12 bg-gray-800 rounded-t-lg"></div>
            <span className="text-[10px] text-gray-500 font-bold mt-2">AGE 30</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-28 bg-[#39FF14] rounded-t-lg shadow-lg shadow-[#39FF14]/20 group-hover:h-32 transition-all"></div>
            <span className="text-[10px] text-[#39FF14] font-bold mt-2">AGE 20</span>
          </div>
        </div>
        <p className="text-[10px] text-gray-500 mt-6 font-medium uppercase">Start now to beat the clock.</p>
      </div>

      <div className="bg-[#1E1E1E] p-6 rounded-3xl text-center border border-gray-800">
        <h4 className="font-bold mb-2">Need a Boost?</h4>
        <p className="text-xs text-gray-500 mb-4">Automate your savings from your student job paycheck.</p>
        <button className="bg-white text-black text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest">
          Link Payroll
        </button>
      </div>
    </div>
  );
};