import React from 'react';
import {
    CheckBadgeIcon,
    ShieldCheckIcon,
    PencilSquareIcon,
    CameraIcon
} from '@heroicons/react/24/solid';

const Profile = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <header className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">My Profile</h1>
                <p className="text-gray-500 font-medium">Manage your personal information and security settings</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Avatar & ID Status */}
                <div className="space-y-6">
                    {/* Avatar Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
                        <div className="relative mb-4 group cursor-pointer">
                            <div className="w-32 h-32 rounded-full bg-brand-100 flex items-center justify-center text-4xl font-bold text-brand-600 border-4 border-white shadow-lg overflow-hidden">
                                <img
                                    src="https://ui-avatars.com/api/?name=Doom+Slayer&background=0ea5e9&color=fff&size=128"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-full transition-all flex items-center justify-center">
                                <CameraIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="absolute bottom-1 right-1 bg-green-500 border-2 border-white w-6 h-6 rounded-full"></div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">Doom Slayer</h2>
                        <p className="text-gray-500 text-sm">Premium Member</p>

                        <div className="mt-6 w-full">
                            <div className="bg-green-50 rounded-lg p-3 flex items-center justify-center gap-2 border border-green-100">
                                <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                                <span className="text-green-700 font-semibold text-sm">Identity Verified</span>
                            </div>
                        </div>
                    </div>

                    {/* Sensitive Data Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-800 mb-4 border-b border-gray-100 pb-2">Identification</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Government ID</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-gray-900">Driver's License</span>
                                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                                        <CheckBadgeIcon className="w-3 h-3" /> Verified
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">SSN / Tax ID</p>
                                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-200">
                                    <span className="font-mono text-gray-700 tracking-widest text-lg">***-**-1234</span>
                                    <button className="text-brand-600 text-xs font-bold hover:text-brand-800">SHOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Basic Info Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <h3 className="font-bold text-lg text-gray-900">Personal Information</h3>
                            <button className="flex items-center gap-1 text-brand-600 font-semibold hover:text-brand-800 transition-colors text-sm">
                                <PencilSquareIcon className="w-4 h-4" /> Edit
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {/* Full Name */}
                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Legal Name</label>
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 font-medium">
                                    Doom Slayer
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                                <div className="relative">
                                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 font-medium truncate pr-8">
                                        rip.and.tear@slayer.net
                                    </div>
                                    <CheckBadgeIcon className="w-5 h-5 text-green-500 absolute top-3.5 right-3" title="Verified" />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                                <div className="relative">
                                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 font-medium">
                                        (666) 555-0199
                                    </div>
                                    <CheckBadgeIcon className="w-5 h-5 text-green-500 absolute top-3.5 right-3" title="Verified" />
                                </div>
                            </div>

                            {/* DOB */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Date of Birth</label>
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 font-medium">
                                    December 10, 1993
                                </div>
                            </div>

                            {/* Occupation - Added for filler */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Occupation</label>
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 font-medium">
                                    Demon Hunter
                                </div>
                            </div>

                            {/* Address */}
                            <div className="md:col-span-2">
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Physical Address</label>
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-900 font-medium flex items-center justify-between">
                                    <span>1 Mars Base Alpha, Hell Creek, TX 75001</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
