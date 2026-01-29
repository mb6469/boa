import React from 'react';

const StatCard = ({ label, value, change, positive, icon }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
                    <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                </div>
                <div className={`p-2 rounded-lg ${positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {icon || (positive ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                    ))}
                </div>
            </div>
            <div className="flex items-center">
                <span className={`text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-500'}`}>
                    {change}
                </span>
                <span className="text-gray-400 text-sm ml-2">from last month</span>
            </div>
        </div>
    );
};

export default StatCard;
