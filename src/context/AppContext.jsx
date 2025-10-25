import {createContext, useState} from "react";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

        const [user, setUser] = useState(null);

    const contextValue = {
        //global state and functions here

        user
    };


  return (


        <AppContext.Provider value={{contextValue}}>
            {children}
        </AppContext.Provider>
  )
    }

