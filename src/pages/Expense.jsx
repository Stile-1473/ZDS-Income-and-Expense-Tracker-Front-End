import Dasboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { PlusSquare } from "lucide-react";
import { useState } from "react";

const Expense = () => {
    useUser();

    const [openAddExpenseModal, setAddExpenseModal] = useState(false);

    return (
        <Dasboard activeMenu="Expense">
            <div
                className="max-w-6xl mx-auto mt-6 animate-page
        p-5 bg-white/50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        backdrop-blur-xl border border-gray-100/60"
            >

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2
                        className="text-2xl font-semibold text-gray-800
            border-l-4 border-red-500 pl-3"
                    >
                        All Expenses
                    </h2>

                    <button
                        onClick={() => setAddExpenseModal(true)}
                        className="flex items-center gap-2 px-4 py-3
            rounded-xl font-medium text-red-700
            bg-red-50 hover:bg-red-100
            border border-red-200 shadow-sm
            hover:shadow-xl transition-all duration-200"
                    >
                        <PlusSquare size={20} className="text-red-600" />
                        Add Expense
                    </button>
                </div>

                {/* Expenses list placeholder */}
                <div className="text-gray-500 text-center py-10">
                    No expenses found yet
                </div>

                {/* Add Expense Modal */}
                {openAddExpenseModal && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fadeScale">
                        <div className="bg-white rounded-2xl p-6 w-[400px] shadow-2xl">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Add Expense
                            </h3>

                            {/* Fields will be added soon */}
                            <div className="flex justify-end mt-5">
                                <button
                                    onClick={() => setAddExpenseModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </Dasboard>
    );
};

export default Expense;
