import Dasboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { TrendingUp, TrendingDown, Wallet, BarChart3 } from "lucide-react";

const Home = () => {
    useUser();

    return (
        <Dasboard activeMenu="Dashboard">
            <div className="max-w-6xl mx-auto mt-6">

                {/* Dashboard Heading */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
                    Overview
                </h2>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                    {/* Balance Card */}
                    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-medium">Balance</p>
                            <Wallet className="text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mt-3">$0.00</h3>
                    </div>

                    {/* Income Card */}
                    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-medium">Total Income</p>
                            <TrendingUp className="text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mt-3">$0.00</h3>
                    </div>

                    {/* Expense Card */}
                    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-medium">Total Expense</p>
                            <TrendingDown className="text-red-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mt-3">$0.00</h3>
                    </div>

                    {/* Categories Count */}
                    <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-medium">Categories</p>
                            <BarChart3 className="text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mt-3">0</h3>
                    </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 h-72 flex items-center justify-center">
                    <p className="text-gray-400 text-lg">📊 Chart coming soon...</p>
                </div>

            </div>
        </Dasboard>
    );
};

export default Home;
