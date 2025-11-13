import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children, title, subtitle, footer }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
            {/* Overlay click */}
            <div className="absolute inset-0" onClick={onClose}></div>

            {/* Modal content */}
            <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50
                      w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-[fadeInScale_0.3s_ease] z-50">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                        {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:bg-red-500 hover:text-white w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                    {children}
                </div>
                {/*ghost*/}

                {/* Optional Footer */}
                {footer && (
                    <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
                        {footer}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Modal;
