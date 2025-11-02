import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {User} from "lucide-react";
import {side_Bar_Data} from "../assets/assets.js";
import {useNavigate, useLocation} from "react-router-dom";

const SideBar = () => {


    const {user} = useContext(AppContext)
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <>

        <div className="w-64 h-[calc(100vh-61px)] bg-white border-gray-200/50 p-5 sticky top-[61px] z-20">

            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">

                <User className="w-20 h-20" />
                <h5 className="text-gray-950 font-medium leading-6">

                    {user?.fullName || " "}
                </h5>
            </div>


            {side_Bar_Data.map(( item,index) =>(
                <button
                    onClick={()=> navigate(item.path)}
                        key={`menu_${index}`}
                    className={` w-full flex items-center
                    bg-transparent hover:bg-blue-50 hover:shadow-lg
                     transition-all duration-200
                     cursor-pointer
                     font-semibold uppercase text-gray-600
                      border border-gray-200 py-3 px-4
                       rounded-xl mb-3 mt-3 gap-4 ${ location.pathname === item.path ? "bg-blue-600 text-white shadow-lg border-blue-600" : "hover:border-blue-300"}`}>

                    <item.icon className={`text-xl ${location.pathname === item.path ? "text-white" : "text-blue-600"}`} />

                    {item.label}

                </button>
            ))}


        </div>
        </>
    )
}


export default SideBar;