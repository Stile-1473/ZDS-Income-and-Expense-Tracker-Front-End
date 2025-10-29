import {useContext, useRef, useState} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";

const NavaBar = () => {
   const [sideBarOpen,setSideBarOpen] = useState(false)
    const [showDropDown,setShowDropDown] = useState(false)
    const dropdownRef = useRef();
   const {user} = useContext(AppContext)
    const navigate = useNavigate();



    return (
        <>
            <div className="flex justify-between
             items-center gap-5 bg-gray-100
             border border-b border-b-blue-950
              py-3 px-2 sticky top-0 z-30">

            {/*    left side menu button and titiel*/}

                <div className="flex items-center gap-5">

                        <button className="block lg:hidden text-gray-500 ">

                        </button>

                </div>






            {/*    right side*/}

                <span>

                    right side
                </span>



                {/*    mobile*/}

                <span>

                    mobile
                </span>



            </div>
        </>
    )
}


 export default NavaBar;