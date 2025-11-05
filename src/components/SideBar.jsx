import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { LogOut, User, Menu } from "lucide-react";
import { side_Bar_Data } from "../assets/assets.js";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
    const { user } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <div
            className={`backdrop-blur-xl
             bg-white/70 border border-gray-200
      shadow-[0px_4px_25px_-6px_rgba(0,0,0,0.15)]
      h-[calc(100vh-61px)] sticky top-[61px] z-20 flex flex-col justify-between
      rounded-3xl mx-3 my-2 overflow-hidden
      transition-all duration-500 ease-in-out
      ${collapsed ? "w-20" : "w-64"}`}
        >

            {/* Toggle */}
            <div className="flex justify-end p-3">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 rounded-xl bg-white/60 hover:bg-white/90 transition shadow-sm active:scale-95"
                >
                    <Menu className="text-gray-600" size={20} />
                </button>
            </div>

            {/* Profile */}
            {!collapsed && (
                <div className="flex flex-col

                items-center gap-3 mb-8 opacity-100 transition-opacity duration-500">
                    <div className="bg-blue-100 p-3 rounded-full shadow-md">
                        <User className="w-12 h-12 text-blue-700" />
                    </div>
                    <h5 className="text-gray-900 font-semibold tracking-wide">
                        {user?.fullName || "Dashboard User"}
                    </h5>
                </div>
            )}

            {/* Menu Items */}
            <nav className="flex-1 space-y-2 px-3">
                {side_Bar_Data.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(item.path)}
                        className={`relative w-full
                         
                         flex items-center gap-4 px-4 py-3 rounded-xl font-medium
              transition-all duration-200
              ${isActive(item.path)
                            ? "bg-blue-300 text-white shadow-lg"
                            : "text-gray-600 hover:bg-blue-50"
                        }
              ${collapsed && "justify-center px-2"}
            `}
                    >
                        <item.icon
                            size={20}
                            className={`transition-transform duration-300
                ${isActive(item.path)
                                ? "animate-bounce-small text-white"
                                : "text-blue-600"
                            }`}
                        />
                        {!collapsed && (
                            <span className="transition-opacity duration-500">{item.label}</span>
                        )}

                        {/* Tooltip */}
                        {collapsed && (
                            <span className="absolute left-20 top-1/2 -translate-y-1/2 opacity-0
              group-hover:opacity-100 transition bg-gray-900 text-white px-2 py-1 text-xs rounded-md whitespace-nowrap">
                {item.label}
              </span>
                        )}
                    </button>
                ))}
            </nav>


            {/* Logout */}
            <div className="p-3">
                <button
                    onClick={() => setShowLogoutConfirm(true)}
                    className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl font-semibold
          text-red-600 bg-red-50 mb-4 hover:bg-red-100 hover:shadow-lg transition
          ${collapsed && "justify-center"}`}
                >
                    <LogOut size={20} />
                    {!collapsed && "Logout"}
                </button>
            </div>


        </div>
    );
};

export default SideBar;
