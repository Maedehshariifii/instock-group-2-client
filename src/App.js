import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import UnmatchedRoutes from "./pages/UnmatchedRoutes/UnmatchedRoutes";
import "./_App.scss";
import WarehouseDetails from "./pages/Warehouses/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes for homepage or warehouses page */}
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        {/* Route for inventory page */}
        <Route path="/inventory/*" element={<Inventory />} />
        {/* Route for unmatched path */}
        <Route path="/*" element={<UnmatchedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
