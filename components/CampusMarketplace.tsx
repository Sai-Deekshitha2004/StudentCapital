
import React from 'react';

export const CampusMarketplace: React.FC = () => {
  const listings = [
    { id: 1, title: 'Calculus Vol 2', price: '₹450', seller: 'Rahul (Sem 4)', type: 'Book', img: '📚' },
    { id: 2, title: 'Lab Coat (L)', price: '₹200', seller: 'Sneha (Sem 6)', type: 'Gear', img: '🥼' },
    { id: 3, title: 'Bicycle - Hero', price: '₹2,500', seller: 'Amit (Final)', type: 'Cycle', img: '🚲' },
    { id: 4, title: 'Drafting Board', price: '₹800', seller: 'Priya (Sem 2)', type: 'Tool', img: '📐' }
  ];

  return (
    <div className="space-y-8 pb-10">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Campus Exchange</h2>
          <p className="text-[10px] text-[#00C853] font-black uppercase tracking-widest">Recycle Assets • Make Cash</p>
        </div>
        <button className="bg-[#00C853] text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">List Item</button>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {listings.map(item => (
          <div key={item.id} className="bg-[#161B2E] rounded-3xl p-5 border border-gray-800 group hover:border-[#00C853]/50 transition-all">
            <div className="text-4xl mb-4 bg-black/40 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
              {item.img}
            </div>
            <h3 className="text-xs font-bold text-white mb-1 truncate">{item.title}</h3>
            <p className="text-[10px] text-gray-500 mb-4">{item.seller}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-black text-[#00C853]">{item.price}</span>
              <button className="text-[10px] bg-white/5 p-2 rounded-lg hover:bg-[#00C853] hover:text-black transition-colors">Pay</button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-600/10 p-6 rounded-3xl border border-indigo-500/20">
        <h4 className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-widest">Market Tip</h4>
        <p className="text-[10px] text-gray-400 leading-relaxed italic">
          "Selling your 1st-year books can fund your first 3 months of an SIP. Don't let them gather dust!"
        </p>
      </div>
    </div>
  );
};
