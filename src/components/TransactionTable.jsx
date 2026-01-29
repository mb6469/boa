import React from 'react';

const TransactionTable = () => {
    const transactions = [
        { id: 1, desc: "Spotify Premium", cat: "Entertainment", date: "Today, 10:24 AM", amount: -12.99, icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" },
        { id: 2, desc: "Grocery Store", cat: "Food & Dining", date: "Yesterday, 6:30 PM", amount: -145.20, icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
        { id: 3, desc: "Freelance Payment", cat: "Income", date: "Mar 23, 2024", amount: 2450.00, icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        { id: 4, desc: "Gas Station", cat: "Transportation", date: "Mar 22, 2024", amount: -45.60, icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-gray-800">Recent Transactions</h3>
                <button className="text-brand-600 text-sm font-semibold hover:text-brand-800">View All</button>
            </div>
            <div className="overflow-x-auto">
                <div className="divide-y divide-gray-50 min-w-[500px]">
                    {transactions.map((tx) => (
                        <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${tx.amount > 0 ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tx.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{tx.desc}</p>
                                    <p className="text-xs text-gray-500">{tx.cat} • {tx.date}</p>
                                </div>
                            </div>
                            <div className={`font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                                {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransactionTable;
