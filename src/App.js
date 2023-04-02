import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carts from "./features/carts/Carts";
import Home from "./pages/Home";
import Register  from './pages/Register'
import Login from './pages/Login'
import FoodPage from "./pages/FoodPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodpage" element={<FoodPage />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>    
    </BrowserRouter>      
  );
}

export default App;
