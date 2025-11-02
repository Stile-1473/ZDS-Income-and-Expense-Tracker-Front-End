import {createContext, useState, useEffect} from "react";
import axiosConfig from "../utils/AxiosConfig.jsx";
import {API_ENDPOINTS} from "../utils/apiEndpoints.js";

 export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

        const [user, setUser] = useState(null);
        const [isLoading, setIsLoading] = useState(true);

        const clearUserInfo = () => {
            localStorage.removeItem("token");
            setUser(null);
        };

        const restoreUser = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const response = await axiosConfig.get(API_ENDPOINTS.GET_USER);
                    setUser(response.data.user);
                } catch (error) {
                    console.error("Failed to restore user:", error);
                    clearUserInfo();
                }
            }
            setIsLoading(false);
        };

        useEffect(() => {
            restoreUser();
        }, []);

    const contextValue = {
        //global state and functions here

        user,
        setUser,
        clearUserInfo,
        isLoading,
    };


  return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
  )
    }

