import Dasboard from "../components/Dasboard.jsx";
import {useUser} from "../hooks/useUser.jsx";

const Expense = () => {
    useUser();
    return (

        <Dasboard  activeMenu="Expense">
            This is the expense section

        </Dasboard>
    )
}

 export default Expense;