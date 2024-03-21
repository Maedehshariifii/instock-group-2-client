import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import UnmatchedRoutes from "./pages/UnmatchedRoutes/UnmatchedRoutes";
import "./_App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for homepage or warehouses page */}
        <Route path="/warehouses" element={<Warehouses />} />
        {/* Route for inventory page */}
        <Route path="/inventory" element={<Inventory />} />
        {/* Route for unmatched path */}
        <Route path="/*" element={<UnmatchedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
