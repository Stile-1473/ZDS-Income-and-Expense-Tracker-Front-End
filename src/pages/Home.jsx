import Dasboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { TrendingUp, TrendingDown, Wallet, BarChart3, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const Home = () => {
    useUser();

    return (
        <Dasboard activeMenu="Dashboard">
            <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">

                    {/* Dashboard Heading */}
                    <div className="mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900">Overview</h2>
                        <p className="text-xs sm:text-sm text-neutral-500 mt-1">Welcome back! Here's your financial summary.</p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {/* Balance Card */}
                        <div className="group relative card-elevated overflow-hidden p-4 sm:p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-0 sm:p-0 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-3 sm:mb-4">
                                    <p className="text-xs sm:text-sm font-medium text-neutral-600">Balance</p>
                                    <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                        <Wallet className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-auto">$0.00</h3>
                                <p className="text-xs text-neutral-500 mt-1 sm:mt-2">Updated today</p>
                            </div>
                        </div>

                        {/* Income Card */}
                        <div className="group relative card-elevated overflow-hidden p-4 sm:p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-0 sm:p-0 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-3 sm:mb-4">
                                    <p className="text-xs sm:text-sm font-medium text-neutral-600">Total Income</p>
                                    <div className="p-2 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors">
                                        <ArrowUpRight className="text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-auto">$0.00</h3>
                                <p className="text-xs text-green-600 mt-1 sm:mt-2 font-medium">↑ 0% from last month</p>
                            </div>
                        </div>

                        {/* Expense Card */}
                        <div className="group relative card-elevated overflow-hidden p-4 sm:p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-0 sm:p-0 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-3 sm:mb-4">
                                    <p className="text-xs sm:text-sm font-medium text-neutral-600">Total Expense</p>
                                    <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                                        <ArrowDownLeft className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-auto">$0.00</h3>
                                <p className="text-xs text-red-600 mt-1 sm:mt-2 font-medium">↓ 0% from last month</p>
                            </div>
                        </div>

                        {/* Categories Count */}
                        <div className="group relative card-elevated overflow-hidden p-4 sm:p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-0 sm:p-0 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-3 sm:mb-4">
                                    <p className="text-xs sm:text-sm font-medium text-neutral-600">Categories</p>
                                    <div className="p-2 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-colors">
                                        <BarChart3 className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-auto">0</h3>
                                <p className="text-xs text-neutral-500 mt-1 sm:mt-2">All categories</p>
                            </div>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="card-elevated p-6 sm:p-8 min-h-64 sm:min-h-80 flex flex-col items-center justify-center">
                        <div className="text-center">
                            <div className="inline-flex p-3 rounded-full bg-blue-50 mb-4">
                                <BarChart3 className="text-blue-600 w-8 h-8" />
                            </div>
                            <h4 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2">Analytics Coming Soon</h4>
                            <p className="text-xs sm:text-sm text-neutral-500">Your financial charts and insights will appear here</p>
                        </div>
                    </div>

                </div>
            </div>
        </Dasboard>
    );
};

export default Home;
