import React from 'react';

const QuickActions = () => {
    const actions = [
        { label: "Transfer Fund", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
        { label: "Pay Bills", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
        { label: "Mobile Deposit", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
        { label: "Send Money", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {actions.map((action, idx) => (
                    <button key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-brand-50 hover:text-brand-700 text-gray-600 transition-all border border-transparent hover:border-brand-100 group">
                        <div className="bg-gray-100 p-3 rounded-full mb-3 group-hover:bg-white group-hover:shadow-sm transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={action.icon} />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
