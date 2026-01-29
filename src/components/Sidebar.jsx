// src/components/Sidebar.jsx
import React from 'react';
import {
    HomeIcon,
    CreditCardIcon,
    ArrowsRightLeftIcon,
    ReceiptPercentIcon,
    UserIcon,
    Cog6ToothIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, onClose }) => {
    const menuItems = [
        { icon: <HomeIcon className="h-5 w-5" />, label: 'Dashboard', path: '/' },
        { icon: <CreditCardIcon className="h-5 w-5" />, label: 'Accounts', path: '/accounts' },
        { icon: <ArrowsRightLeftIcon className="h-5 w-5" />, label: 'Transfers', path: '/transfers' },
        { icon: <ReceiptPercentIcon className="h-5 w-5" />, label: 'Transactions', path: '/transactions' },
        { icon: <UserIcon className="h-5 w-5" />, label: 'Profile', path: '/profile' },
        { icon: <Cog6ToothIcon className="h-5 w-5" />, label: 'Settings', path: '/settings' },
        { icon: <ShieldCheckIcon className="h-5 w-5" />, label: 'Security', path: '/security' },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Logic */}
            <div className={`
                fixed md:static inset-y-0 left-0 z-50
                transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
                transition-transform duration-200 ease-in-out
                w-64 bg-white border-r border-gray-200 min-h-screen md:min-h-[calc(100vh-64px)]
                overflow-y-auto
            `}>
                <div className="p-4">
                    {/* Mobile Close Button */}
                    <div className="flex justify-end md:hidden mb-4">
                        <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600">
                            <span className="sr-only">Close sidebar</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
                            Main
                        </h3>
                        <ul className="space-y-1">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.path}
                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-brand-50 hover:text-brand-700 text-gray-700 font-medium transition-colors"
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
                            Quick Actions
                        </h3>
                        <div className="space-y-3 px-3">
                            <button className="w-full bg-brand-600 text-white py-2.5 px-4 rounded-lg hover:bg-brand-700 font-medium transition-colors shadow-sm text-sm">
                                Pay Bills
                            </button>
                            <button className="w-full border border-brand-600 text-brand-600 py-2.5 px-4 rounded-lg hover:bg-brand-50 font-medium transition-colors text-sm">
                                Deposit Check
                            </button>
                        </div>
                    </div>

                    <div className="bg-brand-50 p-4 rounded-xl mx-2">
                        <h4 className="font-bold text-brand-900 mb-1 text-sm">Need Help?</h4>
                        <p className="text-xs text-brand-600 mb-3">Contact customer support 24/7</p>
                        <button className="text-xs text-brand-700 font-bold hover:text-brand-900 uppercase tracking-wide">
                            Chat Now →
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;