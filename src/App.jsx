import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Menu from "./pages/Menu";
import db from "./API/db";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Menu coffeeItems={db.coffees} />} />
        <Route path="/menu" element={<Menu coffeeItems={db.coffees} />} />
      </Routes>
    </>
  );
}

export default App;