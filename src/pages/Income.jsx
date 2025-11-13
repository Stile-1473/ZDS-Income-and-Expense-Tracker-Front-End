import Dasboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { Plus, TrendingUp } from "lucide-react";

const Income = () => {
    useUser();

    return (
        <Dasboard activeMenu="Income">
            <div className="max-w-6xl mx-auto mt-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-green-600 pl-3">
                        Income Overview
                    </h2>

                    {/* Add Income Button */}
                    <button className="flex items-center gap-2 bg-green-100 text-green-400 px-4 py-2 rounded-xl border border-green-400 transition-all shadow-md">
                        <Plus className="w-5 h-5" />
                        Add Income
                    </button>
                </div>

                {/* Total Income Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-medium">Total Income</p>
                            <TrendingUp className="text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-700 mt-3">$0.00</h3>
                    </div>
                </div>

                {/* Table Placeholder */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-10 text-center text-gray-400">
                    No income records yet...
                </div>

            </div>
        </Dasboard>
    );
};

export default Income;
