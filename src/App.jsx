import {BrowserRouter,Route, Routes, Navigate} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Expense from "./pages/Expense.jsx";
import Income from "./pages/Income.jsx";
import SignUp from "./pages/SignUp.jsx";
import Category from "./pages/Category.jsx";
import Filter from "./pages/Filter.jsx";
import Home from "./pages/Home.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {
  return (

      <>

          <Toaster/>



    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/income" element={<Income />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/category" element={<Category />} />
            <Route path="/filter" element={<Filter />} />
        </Routes>
    </BrowserRouter>

      </>

  );
};
export default App;