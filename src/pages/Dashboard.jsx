import React from 'react';
import AccountCard from '../components/AccountCard';
import StatCard from '../components/StatCard';
import TransactionTable from '../components/TransactionTable';
import QuickActions from '../components/QuickActions';

const Dashboard = () => {
    const stats = [
        {
            label: "Total Net Worth", value: "$42,593.45", change: "+4.2%", positive: true, icon: (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            label: "Monthly Income", value: "$6,250.00", change: "+1.5%", positive: true, icon: (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
            )
        },
        {
            label: "Total Expenses", value: "$2,845.20", change: "-5.1%", positive: false, icon: (
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                </svg>
            )
        },
        {
            label: "Savings Rate", value: "32%", change: "+2.4%", positive: true, icon: (
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
    ];

    const accounts = [
        { id: 1, name: "Premier Checking ", balance: 8423.87, number: "**** 3847", type: "checking" },
        { id: 2, name: "High Yield Savings ", balance: 24500.50, number: "**** 5723", type: "savings" },
        { id: 3, name: "Travel Rewards ✈️", balance: 1250.30, number: "**** 9012", type: "credit" },
    ];

    const savingsGoals = [
        { name: "New Car", target: 25000, current: 15400, color: "bg-blue-500" },
        { name: "Summer Vacation", target: 5000, current: 3200, color: "bg-green-500" },
        { name: "Emergency Fund", target: 10000, current: 10000, color: "bg-purple-500" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <header className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard</h1>
                        <p className="text-gray-500 font-medium">Welcome back, Doom! Here's your financial summary.</p>
                    </div>
                    <div className="text-right hidden sm:block">
                        <p className="text-sm text-gray-400">Net Worth</p>
                        <p className="text-2xl font-bold text-gray-900">$42,593.45</p>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (Accounts & Savings) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Accounts Section */}
                        <section>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Your Accounts</h2>
                                <button className="text-brand-600 font-semibold hover:text-brand-800 transition-colors">Manage Accounts</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {accounts.map(account => (
                                    <AccountCard key={account.id} {...account} />
                                ))}
                                {/* Add Account Button */}
                                <button className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50 transition-all group">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-white transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold">Add New Account</span>
                                </button>
                            </div>
                        </section>

                        {/* Savings Goals */}
                        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Savings Goals 🎯</h2>
                            <div className="space-y-6">
                                {savingsGoals.map((goal, idx) => {
                                    const percentage = Math.min(100, (goal.current / goal.target) * 100);
                                    return (
                                        <div key={idx}>
                                            <div className="flex justify-between text-sm font-semibold mb-1">
                                                <span className="text-gray-700">{goal.name}</span>
                                                <span className="text-gray-500">${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className={`${goal.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </div>

                    {/* Right Column (Actions & History) */}
                    <div className="space-y-8">
                        <QuickActions />

                        <TransactionTable />

                        {/* Financial Tip Widget */}
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-white text-center shadow-lg">
                            <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Smart Tip 💡</h3>
                            <p className="text-indigo-100 text-sm mb-4">
                                You've spent 15% less on dining out this month compared to last. Keep it up to hit your goal!
                            </p>
                            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors w-full">
                                View Insights
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;