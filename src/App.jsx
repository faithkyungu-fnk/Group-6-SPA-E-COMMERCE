cat > src/App.jsx <<'EOF'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AddCoffee from "./pages/AddCoffee";
import db from "./API/db";

function App() {
  const [coffees, setCoffees] = useState(db.coffees);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={<Menu coffeeItems={coffees} />}
        />

        <Route
          path="/coffee/new"
          element={<AddCoffee />}
        />

        <Route
          path="/coffee/:coffeeId"
          element={<div>Coffee details coming soon.</div>}
        />
      </Routes>
    </>
  );
}

export default App;
EOF