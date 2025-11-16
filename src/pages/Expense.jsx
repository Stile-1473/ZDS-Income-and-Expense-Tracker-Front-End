import Dasboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { PlusSquare } from "lucide-react";
import { useState } from "react";

const Expense = () => {
    useUser();

    const [openAddExpenseModal, setAddExpenseModal] = useState(false);

    return (
        <Dasboard activeMenu="Expense">
            <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="min-w-0">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 break-words">Expenses</h2>
                            <p className="text-xs sm:text-sm text-neutral-500 mt-1">Track and manage your spending</p>
                        </div>

                        <button
                            onClick={() => setAddExpenseModal(true)}
                            className="btn-danger-soft flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-5 py-2.5 font-semibold text-sm sm:text-base whitespace-nowrap flex-shrink-0 w-full sm:w-auto"
                        >
                            <PlusSquare size={18} />
                            Add Expense
                        </button>
                    </div>

                    {/* Expenses list placeholder */}
                    <div className="card-elevated p-6 sm:p-8 text-center">
                        <div className="inline-flex p-3 rounded-full bg-red-50 mb-4">
                            <PlusSquare className="text-red-600 w-8 h-8" />
                        </div>
                        <p className="text-neutral-500 font-medium text-sm sm:text-base">No expenses recorded yet</p>
                        <p className="text-neutral-400 text-xs sm:text-sm mt-1">Start tracking your expenses by clicking the button above</p>
                    </div>

                </div>
            </div>
        </Dasboard>
    );
};

export default Expense;
