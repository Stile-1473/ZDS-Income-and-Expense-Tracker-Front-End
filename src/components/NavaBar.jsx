import {useContext, useRef, useState} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";
import { LogOut, Menu, User, User2, X } from "lucide-react";

const NavaBar = () => {
   const [sideBarOpen,setSideBarOpen] = useState(false)
    const [showDropDown,setShowDropDown] = useState(false)
    const dropdownRef = useRef();
   const {user,clearUserInfo} = useContext(AppContext)
    const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.clear()
    setShowDropDown(false)
    clearUserInfo()
    navigate("/login")

  }

    return (
        <>
            <div className="flex justify-between
             items-center gap-5 bg-white
             border-b border-gray-200/50 
             backdrop-blur 
              py-3 px-2 sticky top-0 z-30">

            {/*    left side menu button and titiel*/}

                <div className="flex items-center gap-5">

                        <button
                        onClick = {() => setSideBarOpen(!sideBarOpen)}
                        className="block lg:hidden text-gray-500 hover:bg-gray-100 p-1 rounded transition-colors ">
                                {sideBarOpen ? (
                                    <X className="text-2xl"/>

                                ) :(

                                    <Menu className="text-2xl" />
                                )}
                        </button>

                        <div className="flex items-center gap-2" >

                                {/* <img src={assets.Log} alt="ZeroDaySolutions" className="h-10 w-10"/> */}
                                <span className="text-lg font-medium text-gray truncate">ZDS Billing App</span>

                        </div>

                </div>


            {/* end   left side*/}




            {/*    right side*/}
                        <div className="relative " ref={dropdownRef}>

                                <button 
                                onClick={() => setShowDropDown(!showDropDown)}
                                className="flex items-center justify-center w-10 h-10 bg-gray-100 
                                hover:bg-gray-200 rounded-full transition-colors duration-200
                                 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2">

                                        <User className="text-gray-300"/>

                                </button>

                                {/* Dropdown menu that will be displayed when user clicjks the user icons */}

                                {showDropDown && (
                                    <div className="absolute right-0 mt-2 w-50 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">

                                        {/* user information */}
                                        <div className="px-4 py-3 border-b border-gray-200">
                                             <div className="div flex items-center gap-4">

                                                        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                                                            <User2 className="text-gray-800"/>
                                                        </div>

                                                        <div className="flex-1 min-w-0">

                                                            <p className="text-sm font-medium text-gray-800 truncate">
                                                                {user.fullName}
                                                            </p>


                                                            
                                                            <p className="text-xs font-medium text-gray-500 truncate ">
                                                                {user.email}
                                                            </p>
                                                        </div>



                                            </div>


                                        </div>
                                        {/* end user information */}

                                        {/* menu dropdown */}
                                            <div className="py-1">
                                                   
                                                <button
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-300 hover:bg-gray-50 transition-colors duration-150">
                                                    
                                                    <LogOut className="w-4 h-4" />

                                                    <span className="text-gray-300">Log Out</span>
                                                    </button> 
                                            </div>

                                        {/*menu dropdown end */}


                                    </div>
                                )}

                        </div>

            {/*  end  right side*/}


                {/*    mobile*/}

                <span>

                    mobile
                </span>



            </div>
        </>
    )
}


 export default NavaBar;