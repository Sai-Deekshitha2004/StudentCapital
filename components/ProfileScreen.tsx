
import React, { useState } from 'react';

interface ProfileScreenProps {
  onLogout: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onLogout }) => {
  const [settings, setSettings] = useState({
    biometrics: true,
    privacyMode: false,
    alerts: true,
    twoFactor: false
  });

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Profile Info */}
      <section className="text-center pt-4">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-indigo-600/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-4 border-2 border-indigo-500/20 shadow-xl">
            <span className="text-3xl">🧑‍🎓</span>
          </div>
          <div className="absolute bottom-4 right-0 w-8 h-8 bg-[#00C853] rounded-2xl flex items-center justify-center border-4 border-[#0D1117] text-[10px]">
            ✅
          </div>
        </div>
        <h2 className="text-xl font-bold text-white">Aditya Sharma</h2>
        <p className="text-xs text-[#00C853] font-bold uppercase tracking-widest">B.Tech • IIT Delhi</p>
        <div className="mt-4 flex justify-center space-x-2">
          <span className="bg-[#161B2E] px-3 py-1 rounded-full text-[10px] text-gray-500 font-bold border border-gray-800">aditya@okaxis</span>
          <span className="bg-[#161B2E] px-3 py-1 rounded-full text-[10px] text-gray-500 font-bold border border-gray-800">Verified User</span>
        </div>
      </section>

      {/* Security Center */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest px-2 flex items-center">
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Security Center
        </h3>
        <div className="bg-[#161B2E] rounded-[2rem] border border-gray-800 p-2">
          <SecurityToggle 
            label="Biometric Unlock" 
            desc="Face ID / Fingerprint required" 
            active={settings.biometrics} 
            onClick={() => toggleSetting('biometrics')} 
          />
          <SecurityToggle 
            label="2-Factor Authentication" 
            desc="Extra layer of security" 
            active={settings.twoFactor} 
            onClick={() => toggleSetting('twoFactor')} 
          />
          <SecurityToggle 
            label="App Blur Mode" 
            desc="Blur sensitive info in public" 
            active={settings.privacyMode} 
            onClick={() => toggleSetting('privacyMode')} 
          />
        </div>
      </section>

      {/* Digital Vault */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest px-2">Digital Document Vault</h3>
        <div className="grid grid-cols-2 gap-4">
          <VaultItem label="Aadhar Card" status="Verified" icon="🆔" />
          <VaultItem label="PAN Card" status="Linked" icon="💳" />
          <VaultItem label="College ID" status="Verified" icon="🎓" />
          <VaultItem label="Tax Form 16" status="Empty" icon="📄" />
        </div>
      </section>

      {/* Device & Session Info */}
      <div className="bg-indigo-600/5 border border-indigo-500/10 p-6 rounded-[2rem]">
        <h4 className="text-[10px] text-gray-500 font-black uppercase mb-4 tracking-widest">Active Session</h4>
        <div className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Current Device</span>
            <span className="text-white font-bold">iPhone 15 Pro</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Last Login</span>
            <span className="text-white font-bold">New Delhi, India</span>
          </div>
          <div className="flex justify-between text-xs pt-3 border-t border-white/5">
            <span className="text-[#00C853] font-bold">Status: Encrypted</span>
            <button 
              onClick={() => alert("Logged out of 2 other devices.")}
              className="text-gray-400 font-bold uppercase text-[10px] hover:text-white transition-colors"
            >
              Logout Everywhere
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone / Logout */}
      <section className="pt-4">
        {!showLogoutConfirm ? (
          <button 
            onClick={() => setShowLogoutConfirm(true)}
            className="w-full bg-[#161B2E] border border-red-900/30 text-red-500 font-black py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-red-900/10 transition-all flex items-center justify-center space-x-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span>Log Out of App</span>
          </button>
        ) : (
          <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-[2rem] animate-in fade-in zoom-in duration-300">
            <p className="text-center text-xs font-bold text-red-100 mb-4 tracking-tight">Are you sure you want to log out?</p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 bg-[#161B22] text-white font-black py-3 rounded-xl text-[10px] uppercase tracking-widest border border-gray-800"
              >
                Cancel
              </button>
              <button 
                onClick={onLogout}
                className="flex-1 bg-red-600 text-white font-black py-3 rounded-xl text-[10px] uppercase tracking-widest shadow-lg shadow-red-900/40"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        )}
      </section>

      <p className="text-center text-[9px] text-gray-600 font-bold uppercase tracking-widest mt-4">
        StudentCapital v1.0.4 Premium
      </p>
    </div>
  );
};

const SecurityToggle: React.FC<{ label: string; desc: string; active: boolean; onClick: () => void }> = ({ label, desc, active, onClick }) => (
  <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer" onClick={onClick}>
    <div>
      <h4 className="text-xs font-bold text-white">{label}</h4>
      <p className="text-[9px] text-gray-500 font-medium uppercase tracking-tighter">{desc}</p>
    </div>
    <div className={`w-10 h-6 rounded-full relative transition-colors ${active ? 'bg-[#00C853]' : 'bg-gray-800'}`}>
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? 'right-1' : 'left-1'}`}></div>
    </div>
  </div>
);

const VaultItem: React.FC<{ label: string; status: string; icon: string }> = ({ label, status, icon }) => (
  <div className="bg-[#161B2E] p-4 rounded-3xl border border-gray-800 group hover:border-indigo-500/30 transition-all cursor-pointer">
    <div className="flex justify-between items-start mb-2">
      <span className="text-xl">{icon}</span>
      <svg className="text-gray-600 group-hover:text-[#00C853] transition-colors" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    </div>
    <h4 className="text-[10px] font-bold text-white mb-0.5">{label}</h4>
    <p className="text-[8px] font-black uppercase text-gray-500">{status}</p>
  </div>
);
