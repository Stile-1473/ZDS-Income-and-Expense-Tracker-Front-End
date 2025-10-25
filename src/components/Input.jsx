// components/Input.jsx
import React, { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

const iconMap = {
    fullname: <User className="w-5 h-5 text-gray-400" />,
    email: <Mail className="w-5 h-5 text-gray-400" />,
    password: <Lock className="w-5 h-5 text-gray-400" />,
};

const Input = ({
                   label,
                   value,
                   onChange,
                   placeholder,
                   type = "text",
                   required = true,
                   error = "",
               }) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
        <div className="flex flex-col w-full mb-5 relative">
            {label && (
                <label className="mb-2 text-gray-700 font-semibold" htmlFor={label}>
                    {label}
                </label>
            )}
            <div className="relative">
                {/* Left Icon */}
                {iconMap[label.toLowerCase()] && (
                    <span className="absolute left-3 top-3">{iconMap[label.toLowerCase()]}</span>
                )}

                <input
                    id={label}
                    type={isPassword && showPassword ? "text" : type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-all duration-200
            ${iconMap[label.toLowerCase()] ? "pl-10" : ""}
            ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
          `}
                />

                {/* Password Toggle */}
                {isPassword && (
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 cursor-pointer text-gray-400"
                    >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </span>
                )}
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default Input;
