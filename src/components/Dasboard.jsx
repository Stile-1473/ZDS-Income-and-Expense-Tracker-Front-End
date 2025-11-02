import NavaBar from "./NavaBar.jsx";
import {AppContext} from "../context/AppContext.jsx";
import SideBar from "./SideBar.jsx";

const Dasboard = ({children}) => {


   


    return (
        <>

        <NavaBar />

            {/*layout style*/}
                <div className="flex">
                     <div className="max-[1080px]:hidden">

                         {/* sidebar */}

                         <SideBar />
                         
                     </div>

                    <div className="grow mx-5">{children}</div>

                </div>

        </>
    )
}

 export default  Dasboard;