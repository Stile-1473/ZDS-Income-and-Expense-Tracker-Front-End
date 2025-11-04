import Dasboard from "../components/Dasboard.jsx";
import {useUser} from "../hooks/useUser.jsx";

const Home = () => {
    useUser();
    return (
        <>
            <Dasboard  activeMenu="Dashboard">
            This is the main dashboard

            </Dasboard>
        </>
    )
}

export default
Home;