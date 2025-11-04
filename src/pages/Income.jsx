import Dasboard from "../components/Dasboard.jsx";
import {useUser} from "../hooks/useUser.jsx";

const Income = () => {
    useUser();
    return (

        <Dasboard  activeMenu="Income">
            This is the income

        </Dasboard>
    )
}

export default Income;