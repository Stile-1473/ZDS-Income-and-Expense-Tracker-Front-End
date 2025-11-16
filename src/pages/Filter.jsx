import Dasboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { Search, Filter as FilterIcon } from "lucide-react";
import { useState } from "react";

const Filter = () => {
    useUser();
    const [query, setQuery] = useState("");

    return (
        <Dasboard activeMenu="Search">
            <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="min-w-0">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 break-words">Search & Filter</h2>
                            <p className="text-xs sm:text-sm text-neutral-500 mt-1">Find your transactions quickly</p>
                        </div>

                        <button className="btn-primary-soft flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-5 py-2.5 font-semibold text-sm sm:text-base whitespace-nowrap flex-shrink-0 w-full sm:w-auto">
                            <FilterIcon size={18} />
                            Filters
                        </button>
                    </div>

                    {/* Search Card */}
                    <div className="card-elevated p-4 sm:p-6 mb-6">
                        <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-3">Search Transactions</label>
                        <div className="relative">
                            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4 sm:w-5 sm:h-5" />
                            <input
                                type="text"
                                className="form-input pl-9 sm:pl-12 w-full text-sm sm:text-base"
                                placeholder="Search by name, amount..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Quick Filters */}
                    <div className="mb-6">
                        <h3 className="text-xs sm:text-sm font-semibold text-neutral-700 mb-3">Quick Filters</h3>
                        <div className="flex flex-wrap gap-2">
                            {["All", "Expenses", "Income", "Categories"].map((tag, index) => (
                                <button
                                    key={index}
                                    className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium
                                    text-neutral-700 bg-neutral-100 hover:bg-neutral-200
                                    border border-neutral-200 transition-all active:scale-95"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results */}
                    <div className="card-elevated p-8 sm:p-12 text-center">
                        <div className="inline-flex p-3 rounded-full bg-purple-50 mb-4">
                            <Search className="text-purple-600 w-8 h-8" />
                        </div>
                        <p className="text-neutral-500 font-medium text-sm sm:text-base">Start searching to find your transactions</p>
                        <p className="text-neutral-400 text-xs sm:text-sm mt-1">Use the search bar or filters above to locate specific transactions</p>
                    </div>

                </div>
            </div>
        </Dasboard>
    );
};

export default Filter;
