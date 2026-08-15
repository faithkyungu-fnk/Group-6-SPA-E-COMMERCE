import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AddCoffee from "./pages/AddCoffee";
import CoffeeDetails from "./pages/CoffeeDetails";


function App() {
  
  return (
    <>
    <NavBar />
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/add-coffee" element={<AddCoffee />} />
      <Route path="/coffee/:id" element={<CoffeeDetails />} />

    </Routes>
    </>
  )
}

export default App
