import React, { useState } from "react";
import Input from "../components/Input";
import {useNavigate} from "react-router-dom";
import {validateEmail, validatePassword} from "../utils/validation.js";
import axiosConfig from "../utils/AxiosConfig.jsx";
import {API_ENDPOINTS} from "../utils/apiEndpoints.js";
import toast from "react-hot-toast";

const Signup = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        let tempErrors = {};
        if (!fullname) tempErrors.fullname = "Full name is required";
        if (!email){
            tempErrors.email = "Email is required";

        }else if(!validateEmail(email)){
            tempErrors.email = "Email is not valid";
        }
        if (!password) {
            tempErrors.password = "Password is required";
        } else if (!validatePassword(password)) {
            tempErrors.password = "Password must be at least 8 characters, include an uppercase letter and a number";
        }

        //console.log(fullname, email, password);
        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            setIsLoading(false);
        } else {

           // Simulate API call for signup

            try {





               const response = await axiosConfig.post(API_ENDPOINTS.REGISTER,{
                    fullname,
                    email,
                    password,


               })

                if(response.status === 201){
                    toast.success("Registration successful! Please login.");
                    navigate("/login");
                }

                setIsLoading(false);

            }catch(err) {
                    console.error("Something went wrong during registration:", err);
                    if (err.response && err.response.data && err.response.data.message) {
                        toast.error(err.response.data.message);
                    } else {
                        toast.error("Registration failed. Please try again.");
                    }
                    setIsLoading(false);
            }



            setIsLoading(false);

        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">

            <form
                onSubmit={handleSubmit}
                className="bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-lg w-full max-w-md border border-white/30"
            >
                <h3 className="text-3l font-bold mb-2 text-center text-gray-900/80">
                    Take Control of Your Money, Effortlessly
                </h3>
                <p className="text-center text-gray-700/70 mb-8">
                    Sign up to start tracking your income and expenses with ZDS
                </p>

        

                <Input
                    label="Full Name"
                    value={fullname}
                    onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullname) setErrors({ ...errors, fullname: "" });
                    }}
                    placeholder="John Doe"
                    error={errors.fullname}
                />

                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="you@example.com"
                    error={errors.email}
                />

                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) setErrors({ ...errors, password: "" });
                    }}
                    placeholder="Enter your password"
                    error={errors.password}
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gray-900/80 hover:bg-gray-900/90 text-white py-3 rounded-lg font-semibold mt-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Signing Up..."


                        : "Sign Up"}
                </button>

                <p className="text-center text-gray-900/70 mt-4">
                    Already have an account?{" "}
                    <span
                        className="text-blue-600 hover:underline cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
    Login
  </span>
                </p>

            </form>
        </div>
    );
};

export default Signup;
