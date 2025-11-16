import { Edit2, Trash2, ListCollapse } from "lucide-react";

const CategoryList = ({ categories, onEditCategory }) => {
    return (
        <div className="card-elevated p-5 sm:p-7 w-full animate-slideUp rounded-xl bg-white shadow-sm border border-neutral-100">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-neutral-900">Categories</h4>
                    <p className="text-sm text-neutral-500 mt-1">{categories.length} total</p>
                </div>
            </div>

            {/* Empty State */}
            {categories.length === 0 ? (
                <div className="text-center py-12">
                    <div className="inline-flex p-4 rounded-full bg-neutral-100 mb-3">
                        <ListCollapse className="w-7 h-7 text-neutral-400" />
                    </div>
                    <p className="text-neutral-600 font-medium text-base">No categories yet</p>
                    <p className="text-neutral-400 text-sm mt-1">
                        Create your first category to get started
                    </p>
                </div>
            ) : (
                <div className="max-h-[28rem] overflow-y-auto pr-1">

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="
                                    relative p-5 rounded-2xl overflow-hidden group
                                    bg-white/70
                                    backdrop-blur-xl
                                    border border-neutral-200/60
                                    shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                                    hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)]
                                    hover:-translate-y-1
                                    transition-all duration-300
                                "
                            >
                                {/* Decorative Glow */}
                                <div className="
                                    absolute inset-0 bg-gradient-to-br
                                    from-blue-50/60 via-transparent to-transparent
                                    opacity-0 group-hover:opacity-100
                                    transition duration-300
                                "></div>

                                {/* CONTENT */}
                                <div className="relative z-10 flex flex-col">

                                    {/* Icon */}
                                    <div
                                        className="
                                            w-14 h-14 rounded-2xl mb-4
                                            flex items-center justify-center
                                            bg-gradient-to-br from-blue-500 to-blue-400
                                            shadow-[0_8px_20px_rgba(59,130,246,0.35)]
                                            text-white
                                            transform transition duration-300 group-hover:scale-110
                                        "
                                    >
                                        {category.icon ? (
                                            <img
                                                src={category.icon}
                                                alt={category.name}
                                                className="w-7 h-7 object-contain"
                                            />
                                        ) : (
                                            <ListCollapse className="w-7 h-7" />
                                        )}
                                    </div>

                                    {/* Category Name */}
                                    <p className="text-neutral-900 font-semibold text-base capitalize line-clamp-1">
                                        {category.name}
                                    </p>

                                    {/* Type Badge */}
                                    <span
                                        className={`
                                            mt-2 w-fit px-3 py-1 text-xs font-semibold rounded-full capitalize
                                            ${
                                            category.type === "income"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                        }
                                        `}
                                    >
                                        {category.type}
                                    </span>

                                    {/* EDIT BUTTON */}
                                    <button
                                        onClick={() => onEditCategory(category)}
                                        className="
                                            relative mt-5 w-full py-2.5 rounded-xl
                                            font-medium text-sm
                                            bg-gradient-to-r from-blue-600 to-blue-500
                                            text-white
                                            shadow-md hover:shadow-lg
                                            active:scale-[0.97]
                                            transition-all duration-300
                                            overflow-hidden
                                        "
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <Edit2 className="w-4 h-4" />
                                            Edit Category
                                        </span>

                                        {/* Shine */}
                                        <span
                                            className="
                                                absolute inset-0 bg-white/20
                                                opacity-0 hover:opacity-30
                                                transition duration-300
                                            "
                                        ></span>

                                        {/* Ripple */}
                                        <span
                                            className="
                                                absolute inset-0 rounded-xl
                                                bg-white/20 scale-0 group-hover:scale-150
                                                transition-transform duration-700
                                            "
                                        ></span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryList;
