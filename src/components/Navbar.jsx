// src/components/Navbar.jsx
import React from 'react';
import { BellIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = ({ onMenuClick }) => {
    return (
        <nav className="bg-brand-900 text-white sticky top-0 z-30">
            <div className="max-w-full mx-auto px-4 md:px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden p-2 -ml-2 hover:bg-brand-800 rounded-lg"
                            onClick={onMenuClick}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div className="text-xl md:text-2xl font-bold tracking-tight">Bank of America</div>
                        <div className="hidden md:flex space-x-6 ml-8">
                            <a href="/" className="hover:text-blue-200 font-medium text-sm lg:text-base">Dashboard</a>
                            <a href="/accounts" className="hover:text-blue-200 font-medium text-sm lg:text-base">Accounts</a>
                            <a href="/transfers" className="hover:text-blue-200 font-medium text-sm lg:text-base">Transfers</a>
                            <a href="/transactions" className="hover:text-blue-200 font-medium text-sm lg:text-base">Transactions</a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 md:space-x-4">
                        <button className="p-2 hover:bg-brand-800 rounded-full transition-colors relative">
                            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-brand-900"></div>
                            <BellIcon className="h-6 w-6" />
                        </button>
                        <div className="flex items-center space-x-2 hover:bg-brand-800 p-1.5 rounded-lg cursor-pointer transition-colors">
                            <div className="h-8 w-8 bg-brand-700 rounded-full flex items-center justify-center font-bold text-sm border-2 border-brand-600">
                                JD
                            </div>
                            <span className="hidden md:block font-medium text-sm">John Doe</span>
                            <ChevronDownIcon className="h-4 w-4 hidden md:block" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;