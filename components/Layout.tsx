
import React from 'react';

// Common layout helpers for consistent spacing and mobile viewport simulation
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar">
      {children}
    </div>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-[#1E1E1E] rounded-3xl p-6 border border-gray-800 ${className}`}>
    {children}
  </div>
);
