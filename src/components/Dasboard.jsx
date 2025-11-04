import NavaBar from "./NavaBar.jsx";
import {AppContext} from "../context/AppContext.jsx";
import SideBar from "./SideBar.jsx";
import {useContext} from "react";

const Dasboard = ({children}) => {


   
const {user} = useContext(AppContext)

    return (
        <>

        <NavaBar />

            {user && (
                <div className="flex">
                    <div className="max-[1080px]:hidden">

                        {/* sidebar */}


                        <SideBar />

                    </div>

                    <div className="grow mx-5">{children}</div>

                </div>

            )}
            {/*layout style*/}


        </>
    )
}

 export default  Dasboard;