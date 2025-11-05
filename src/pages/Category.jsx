import Dashboard from "../components/Dasboard.jsx";
import { useUser } from "../hooks/useUser.jsx";
import { PlusSquare } from "lucide-react";
import CategoryList from "../components/CategoryList.jsx";
import { useState } from "react";

const Category = () => {
    useUser();

    const [loading, setLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [openAddCategoryModal, setAddCategoryModal] = useState(false);

    const fetchCategories = async () => {};

    return (
        <Dashboard activeMenu="Category">
            <div
                className="max-w-6xl mx-auto mt-6 animate-page
        p-5 bg-white/50 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        backdrop-blur-xl border border-gray-100/60"
            >

                {/* Title + Button */}
                <div className="flex justify-between items-center mb-8">
                    <h2
                        className="text-2xl font-semibold text-gray-800
            border-l-4 border-blue-500 pl-3"
                    >
                        All Categories
                    </h2>

                    <button
                        onClick={() => setAddCategoryModal(true)}
                        className="flex items-center gap-2 px-4 py-3
            rounded-xl font-medium text-blue-700
            bg-blue-50 hover:bg-blue-100
            border border-blue-200 shadow-sm
            hover:shadow-xl transition-all duration-200"
                    >
                        <PlusSquare size={20} className="text-blue-600" />
                        Add New Category
                    </button>
                </div>

                {/* Category List */}
                <CategoryList />

                {/* Add Category Modal */}
                {openAddCategoryModal && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fadeScale">
                        <div className="bg-white rounded-2xl p-6 w-[400px] shadow-2xl">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Add Category
                            </h3>

                            {/* Fields here later */}
                            <div className="flex justify-end mt-5">
                                <button
                                    onClick={() => setAddCategoryModal(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </Dashboard>
    );
};

export default Category;
