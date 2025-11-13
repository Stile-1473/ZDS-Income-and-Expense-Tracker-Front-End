import { Edit2, Trash2, ListCollapse } from "lucide-react";

const CategoryList = ({ categories, onEditCategory, onDeleteCategory }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-5 w-full">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-gray-700">Categories</h4>
            </div>

            {categories.length === 0 ? (
                <p className="text-gray-500 text-center py-6">No categories yet</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-white border border-gray-200 hover:shadow-md rounded-xl transition-all"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full text-xl">
                                {category.icon ? (
                                    <img src={category.icon} className="h-7 w-7" />
                                ) : (
                                    <ListCollapse className="text-gray-600 w-6 h-6" />
                                )}
                            </div>

                            {/* Category Info */}
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">{category.name}</p>

                                <span
                                    className={`inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full ${
                                        category.type === "income"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-red-100 text-red-600"
                                    }`}
                                >
                  {category.type.charAt(0).toUpperCase() +
                      category.type.slice(1)}
                </span>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => onEditCategory(category)}
                                    className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-all"
                                >
                                    <Edit2 className="w-4 h-4" />
                                </button>

                                <button
                                    onClick={() => onDeleteCategory(category.id)}
                                    className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-all"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryList;
