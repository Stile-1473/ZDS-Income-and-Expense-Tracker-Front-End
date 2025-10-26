// Login
import React, {useContext, useState} from "react";
import Input from "../components/Input.jsx";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { validateEmail } from "../utils/validation.js";
import axiosConfig from "../utils/AxiosConfig.jsx";
import {API_ENDPOINTS} from "../utils/apiEndpoints.js";
import {AppContext, AppContextProvider} from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {setUser} = useContext(AppContext);


    const navigate = useNavigate();

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let tempErrors = {};

        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            tempErrors.email = "Email is not valid";
            setIsLoading(false);


        }
        if (!password) tempErrors.password = "Password is required";

        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            setIsLoading(false);
        } else {
            try {

               const response = await  axiosConfig.post(API_ENDPOINTS.LOGIN,{
                    email,
                    password
                })
                setIsLoading(false);

                const {token,user} = response.data;

               if (token){
                   localStorage.setItem("token", token);
                   setUser(user);
                   navigate("/dashboard")
               }

                console.log(response);

            }catch (error) {
                setIsLoading(false);

                if(error.response && error.response.data.message ){
                    toast.error(error.response.data.message);

                }else {
                    console.error("something went wrong", error);
                    toast.error("Something went wrong");
                }


            }

        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
            <form
                onSubmit={handleSubmit}
                className="bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-lg w-full max-w-md border border-white/30"
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900/80">Login</h2>

                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="you@example.com"
                    icon={<Mail size={18} className="text-gray-900/60" />}
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
                    icon={<Lock size={18} className="text-gray-900/60" />}
                    error={errors.password}
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gray-900/80 hover:bg-gray-900/90 text-white py-3 rounded-lg font-semibold mt-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Logging In..." : "Login"}
                </button>

                <p className="text-center text-gray-900/70 mt-4">
                    Don't have an account?{" "}
                    <span
                        className="text-blue-600 hover:underline cursor-pointer"
                        onClick={() => navigate("/signup")}
                    >
            Sign Up
          </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
