import Dasboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { Search, Filter as FilterIcon } from "lucide-react";
import { useState } from "react";

const Filter = () => {
    useUser();
    const [query, setQuery] = useState("");

    return (
        <Dasboard activeMenu="Search">
            <div
                className="max-w-6xl mx-auto mt-6 animate-page
        p-6 bg-white/50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        backdrop-blur-xl border border-gray-100/60"
            >

                {/* Title & Filters Icon */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-3">
                        Search & Filters
                    </h2>

                    <button
                        className="flex items-center gap-2 px-4 py-2 rounded-xl
            text-purple-700 bg-purple-50 border border-purple-200
            hover:bg-purple-100 hover:shadow-xl transition-all"
                    >
                        <FilterIcon size={18} />
                        Filters
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-3 text-gray-400" size={20} />
                    <input
                        type="text"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white
            shadow-sm border border-gray-200 focus:ring-2
            focus:ring-purple-400 focus:outline-none text-gray-700"
                        placeholder="Search expenses, income, categories..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {/* Quick Filter Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {["All", "Expenses", "Income", "Categories"].map((tag, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 rounded-full text-sm font-medium
              text-gray-600 bg-gray-100 border border-gray-200
              hover:bg-purple-100 hover:text-purple-700
              transition-all"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Results */}
                <div className="text-center text-gray-500 py-12">
                    Type to search your content 🔍
                </div>

            </div>
        </Dasboard>
    );
};

export default Filter;
