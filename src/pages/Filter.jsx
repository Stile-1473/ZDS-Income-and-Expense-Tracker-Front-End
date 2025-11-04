import Dasboard from "../components/Dasboard.jsx";
import {useUser} from "../hooks/useUser.jsx";

const Filter = () => {
    useUser();
    return (

        <Dasboard  activeMenu="Search">
         search your content

        </Dasboard>
    )
}

export default Filter;