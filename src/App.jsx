import {BrowserRouter,Route, Routes, Navigate} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Expense from "./pages/Expense.jsx";
import Income from "./pages/Income.jsx";
import SignUp from "./pages/SignUp.jsx";
import Category from "./pages/Category.jsx";
import Filter from "./pages/Filter.jsx";
import Home from "./pages/Home.jsx";
import {Toaster} from "react-hot-toast";
import {useContext} from "react";
import {AppContext} from "./context/AppContext.jsx";

const App = () => {
  const {user, isLoading} = useContext(AppContext);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (

      <>

          <Toaster/>



    <BrowserRouter>
        <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />
            <Route path="/dashboard" element={user ? <Home /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" replace />} />
            <Route path="/expense" element={user ? <Expense /> : <Navigate to="/login" replace />} />
            <Route path="/income" element={user ? <Income /> : <Navigate to="/login" replace />} />
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/dashboard" replace />} />
            <Route path="/category" element={user ? <Category /> : <Navigate to="/login" replace />} />
            <Route path="/filter" element={user ? <Filter /> : <Navigate to="/login" replace />} />
        </Routes>
    </BrowserRouter>

      </>

  );
};
export default App;
