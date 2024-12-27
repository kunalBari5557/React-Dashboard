import React from "react";
import { Mail, Settings, Bell, Search, LayoutDashboard } from "lucide-react";
import profile from "../assets/img1.webp";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-[#202028] shadow-sm border-b border-gray-700">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700">
                        <LayoutDashboard size={20} color="#7194FF" />
                    </button>

                    <div className="relative ml-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-64 px-4 py-2 text-sm border rounded-lg bg-[#2A2B30] text-[#78797C] placeholder-[#78797C] focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-8"
                        />
                        <Search
                            size={18}
                            className="absolute left-2 top-2.5 text-[#78797C] pointer-events-none"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="relative p-2 rounded-full bg-[#44444B] hover:bg-gray-700">
                        <Mail size={20} color="#fff" />
                    </button>
                    <button className="relative p-2 rounded-full bg-[#44444B] hover:bg-gray-700">
                        <Settings size={20} color="#fff" />
                    </button>
                    <button className="relative p-2 rounded-full bg-[#44444B] hover:bg-gray-700">
                        <Bell size={20} color="#fff" />
                        <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-[#7194FF] rounded-full"></span>
                    </button>

                    <img
                        src={profile}
                        alt="User Profile"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
