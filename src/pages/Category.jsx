import Dasboard from "../components/Dasboard.jsx";
import {useUser} from "../hooks/useUser.jsx";

const Category = () => {
    useUser();
    return (

        <Dasboard  activeMenu="Category">
            This is the catergory section

        </Dasboard>
    )
}

 export default Category;