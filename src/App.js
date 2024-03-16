import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./components/Warehouses";
import Inventory from "./components/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes for homepage or warehouses page */}
        <Route path="/" element={Warehouses} />
        <Route path="/warehouses" element={Warehouses} />
        {/* Route for homepage or warehouses page */}
        <Route path="/inventory" element={Inventory} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
