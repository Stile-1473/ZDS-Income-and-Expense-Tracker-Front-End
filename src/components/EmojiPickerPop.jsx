import { useState } from "react";
import { Image, X } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { createPortal } from "react-dom";

const EmojiPickerPop = ({ icon, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleEmojiClick = (emoji) => {
        onSelect(emoji?.imageUrl || emoji?.emoji || "");
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row items-start gap-5 mb-4 relative">
            <div
                onClick={() => setIsOpen(true)}
                className="flex gap-2 items-center cursor-pointer"
            >
                <div className="flex w-12 h-12 justify-center items-center text-2xl border rounded-lg bg-gray-100">
                    {icon ? <img src={icon} className="w-12 h-12" /> : <Image size={16} />}
                </div>
                <p>{icon ? "Change Icon" : "Pick Icon"}</p>
            </div>

            {isOpen &&
                createPortal(
                    <div className="fixed z-[99999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center bg-white border rounded-full z-50"
                        >
                            <X size={14} />
                        </button>
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default EmojiPickerPop;
