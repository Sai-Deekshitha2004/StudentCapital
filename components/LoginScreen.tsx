
import React, { useState } from 'react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [pin, setPin] = useState<string>('');

  const handleKeyPress = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin === '1234') { // Mock PIN for prototype
        setTimeout(onLoginSuccess, 300);
      }
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="flex justify-center bg-[#05070a] min-h-screen">
      <div className="w-full max-w-md bg-[#0D1117] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px]"></div>

        {/* Branding */}
        <div className="text-center mb-16 z-10">
          <div className="w-20 h-20 bg-indigo-600/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Student<span className="text-[#00C853]">Capital</span></h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Enter Secure PIN</p>
        </div>

        {/* PIN Indicators */}
        <div className="flex space-x-6 mb-16 z-10">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`w-4 h-4 rounded-full transition-all duration-300 border ${i <= pin.length ? 'bg-[#00C853] border-[#00C853] scale-125' : 'bg-transparent border-gray-700'}`}
            ></div>
          ))}
        </div>

        {/* PIN Pad */}
        <div className="grid grid-cols-3 gap-6 mb-12 z-10">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num)}
              className="w-20 h-20 rounded-full bg-[#161B22] border border-gray-800 text-2xl font-bold text-white hover:bg-[#1C222D] active:scale-95 transition-all flex items-center justify-center shadow-lg"
            >
              {num}
            </button>
          ))}
          <button 
            className="w-20 h-20 rounded-full flex items-center justify-center text-emerald-400 opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => alert("Simulating Biometric Unlock...")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 12c0-1.66 4-3 9-3s9 1.34 9 3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/><circle cx="12" cy="12" r="9"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
          </button>
          <button
            onClick={() => handleKeyPress('0')}
            className="w-20 h-20 rounded-full bg-[#161B22] border border-gray-800 text-2xl font-bold text-white hover:bg-[#1C222D] active:scale-95 transition-all flex items-center justify-center shadow-lg"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            className="w-20 h-20 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>
          </button>
        </div>

        {/* Footer info */}
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest text-center">
          <svg className="inline-block mr-1 mb-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Bank Grade 256-bit Encryption
        </p>
      </div>
    </div>
  );
};
