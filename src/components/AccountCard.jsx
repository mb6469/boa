import React from 'react';

const AccountCard = ({ name, balance, number, type }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
                <div className="bg-brand-50 p-3 rounded-full group-hover:bg-brand-100 transition-colors">
                    {type === 'checking' && (
                        <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    )}
                    {type === 'savings' && (
                        <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                    {type === 'credit' && (
                        <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    )}
                </div>
                <button className="text-gray-400 hover:text-brand-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </button>
            </div>

            <div className="mb-4">
                <p className="text-gray-500 font-medium text-sm">{name}</p>
                <div className="flex items-baseline gap-1">
                    <h3 className="text-2xl font-bold text-gray-900">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                </div>
                <p className="text-gray-400 text-sm mt-1">{number}</p>
            </div>

            <button className="w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm">
                View Transactions
            </button>
        </div>
    );
};

export default AccountCard;
