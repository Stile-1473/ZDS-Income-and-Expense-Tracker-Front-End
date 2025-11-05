import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useNavigate } from "react-router-dom";
import { LogOut, Menu, Bell, Search, User, User2, X } from "lucide-react";
import SideBar from "./SideBar.jsx";

const NavaBar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const dropdownRef = useRef();
    const { user, clearUserInfo } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setShowDropDown(false);
        clearUserInfo();
        navigate("/login");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropDown(false);
            }
        };

        if (showDropDown) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showDropDown]);

    return (
        <>
            <div
                className="flex justify-between items-center gap-5
        backdrop-blur-xl bg-white/70 border-b border-gray-200/50
        px-4 py-3 sticky top-0 z-50 shadow-[0_6px_15px_-6px_rgba(0,0,0,0.08)]
        rounded-b-3xl"
            >

                {/* Left Section */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu */}
                    <button
                        onClick={() => setSideBarOpen(!sideBarOpen)}
                        className="block lg:hidden text-gray-600 p-2 rounded-xl bg-white/70
            hover:bg-white/90 transition shadow-sm"
                    >
                        {sideBarOpen ? <X /> : <Menu />}
                    </button>

                    {/* App Name */}
                    <h1 className="text-lg font-semibold text-gray-700 tracking-wide">
                        ZDS Billing App
                    </h1>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {/* Search */}
                    <div className="hidden md:flex items-center gap-2 bg-white/50 border
          border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                        <Search size={18} className="text-gray-500" />
                        <input
                            type="text"
                            className="bg-transparent text-sm outline-none text-gray-700"
                            placeholder="Search..."
                        />
                    </div>

                    {/* Notifications */}
                    <button
                        className="relative p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-sm transition"
                    >
                        <Bell size={18} className="text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* Profile Button */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setShowDropDown(!showDropDown)}
                            className="flex items-center justify-center w-10 h-10 bg-white/70
              hover:bg-white/90 rounded-full shadow-sm transition"
                        >
                            <User className="text-gray-600" />
                        </button>

                        {/* Dropdown */}
                        {showDropDown && (
                            <div
                                className="absolute right-0 mt-2 w-56 bg-white border border-gray-200
                rounded-xl shadow-xl py-2 animate-fadeScale z-50"
                            >
                                {/* User Info */}
                                <div className="flex items-center gap-3 px-4 py-3 border-b">
                                    <div className="bg-gray-100 p-2 rounded-full">
                                        <User2 size={20} className="text-gray-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800 truncate">
                                            {user.fullName}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                    </div>
                                </div>

                                {/* Logout */}
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 w-full px-4 py-2
                  text-sm text-red-600 hover:bg-red-50 transition"
                                >
                                    <LogOut size={16} />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {sideBarOpen && (
                <div
                    className="fixed left-0 right-0 bg-white/80 border-r backdrop-blur-xl shadow-xl
          lg:hidden z-40 top-[73px] animate-slideLeft"
                >
                    <SideBar />
                </div>
            )}
        </>
    );
};

export default NavaBar;
