
import React, { useState } from 'react';
import { ActiveTracker } from './components/ActiveTracker';
import { BillManager } from './components/BillManager';
import { InvestmentAccelerator } from './components/InvestmentAccelerator';
import { KnowledgeHub } from './components/KnowledgeHub';
import { LoginScreen } from './components/LoginScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { CampusMarketplace } from './components/CampusMarketplace';
import { IncomeTracker } from './components/IncomeTracker';
import { Screen } from './types';
import { COLORS } from './constants';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState<Screen>('aaj_ka_kharcha');
  const [isPrivacyMode, setIsPrivacyMode] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveScreen('aaj_ka_kharcha');
  };

  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  const getScreenComponent = () => {
    switch(activeScreen) {
      case 'aaj_ka_kharcha': return <ActiveTracker isBlur={isPrivacyMode} />;
      case 'split_budget': return <BillManager isBlur={isPrivacyMode} />;
      case 'nivesh': return <InvestmentAccelerator />;
      case 'gyaan': return <KnowledgeHub />;
      case 'profile': return <ProfileScreen onLogout={handleLogout} />;
      case 'marketplace': return <CampusMarketplace />;
      case 'hustle': return <IncomeTracker />;
      default: return <ActiveTracker isBlur={isPrivacyMode} />;
    }
  };

  return (
    <div className="flex justify-center bg-[#05070a] min-h-screen">
      <div className="w-full max-w-md bg-[#0D1117] relative flex flex-col min-h-screen overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-6 pt-8 pb-4 flex justify-between items-center z-10 bg-[#0D1117]/80 backdrop-blur-md sticky top-0 border-b border-white/5">
          <div className="cursor-pointer" onClick={() => setActiveScreen('aaj_ka_kharcha')}>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center">
              Student<span className="text-[#00C853]">Cap</span>
              <span className="ml-2 text-orange-500 animate-pulse text-sm">🔥 7</span>
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => setActiveScreen('marketplace')} className="p-2 text-gray-400 hover:text-[#00C853]">🛒</button>
            <button onClick={() => setActiveScreen('hustle')} className="p-2 text-gray-400 hover:text-indigo-400">💰</button>
            <button 
              onClick={() => setActiveScreen('profile')}
              className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${activeScreen === 'profile' ? 'bg-[#00C853] border-[#00C853] text-black' : 'bg-[#161B22] border-gray-800 text-gray-400'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto no-scrollbar px-6 py-4 pb-32">
          {getScreenComponent()}
        </main>

        {/* Nav */}
        <nav className="absolute bottom-0 left-0 right-0 h-24 bg-[#0D1117] border-t border-gray-800/50 flex items-center justify-around px-4 pb-4 z-20">
          <NavButton active={activeScreen === 'aaj_ka_kharcha'} onClick={() => setActiveScreen('aaj_ka_kharcha')} icon="🏠" label="Home" />
          <NavButton active={activeScreen === 'split_budget'} onClick={() => setActiveScreen('split_budget')} icon="💳" label="Bills" />
          <NavButton active={activeScreen === 'nivesh'} onClick={() => setActiveScreen('nivesh')} icon="🚀" label="Invest" />
          <NavButton active={activeScreen === 'gyaan'} onClick={() => setActiveScreen('gyaan')} icon="💎" label="Gyaan" />
        </nav>
      </div>
    </div>
  );
};

const NavButton: React.FC<{ active: boolean; onClick: () => void; icon: string; label: string }> = ({ active, onClick, icon, label }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all ${active ? 'bg-[#161B22] text-[#00C853]' : 'text-gray-500'}`}>
    <span className="text-xl mb-1">{icon}</span>
    <span className="text-[9px] font-black uppercase tracking-wider">{label}</span>
  </button>
);

export default App;
