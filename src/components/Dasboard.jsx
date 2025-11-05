import NavaBar from "./NavaBar.jsx";
import { AppContext } from "../context/AppContext.jsx";
import SideBar from "./SideBar.jsx";
import { useContext } from "react";

const Dashboard = ({ children }) => {
    const { user } = useContext(AppContext);

    return (
        <>
            <NavaBar />

            {user && (
                <div className="flex">
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block">
                        <SideBar />
                    </div>

                    {/* Content Area */}
                    <div
                        className="grow p-6 min-h-[calc(100vh-80px)]
            bg-gray-50/60 rounded-tl-3xl
            overflow-y-auto animate-page"
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Dashboard;
