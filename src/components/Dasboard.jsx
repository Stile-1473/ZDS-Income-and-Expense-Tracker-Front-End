import NavaBar from "./NavaBar.jsx";
import {AppContext} from "../context/AppContext.jsx";
import {useContext} from "react";
import SideBar from "./SideBar.jsx";

const Dasboard = () => {

    // Grap user data

    const {user} = useContext(AppContext)

   


    return (
        <>

        <NavaBar/>

            {/*layout style*/}
            {user && (
                <div className="flex">
                     <div className="max-[1080px]:hidden">

                         {/* sidebar */}

                         <SideBar />
                         
                     </div>

                    <div className="grow mx-5">Right side bank</div>

                </div>
            )}
        </>
    )
}

 export default  Dasboard;