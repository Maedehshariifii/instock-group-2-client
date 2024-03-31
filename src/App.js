import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";
import UnmatchedRoutes from "./pages/UnmatchedRoutes/UnmatchedRoutes";
import "./_App.scss";
import WarehouseDetails from "./pages/Warehouses/WarehouseDetails";
import React, { useState } from "react";
import AddWarehouse from "./components/Warehouse/AddWarehouse";

function App() {
  const [selectedWarehouse] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes for homepage or warehouses page */}
        <Route path="/" element={<Warehouses />} />

        <Route path="/warehouses/*" element={<Warehouses />} />
        {/* Route for a warehouses details page*/}
        <Route
          path="/warehouses/:id/inventories"
          element={<WarehouseDetails key={selectedWarehouse.id} />}
        />
        {/* Route for add warehouses page*/}
        <Route path="/warehouses/add" element={<AddWarehouse />} />

        {/* Route for inventory page */}
        <Route path="/inventory/*" element={<Inventory />} />
        {/* Route for unmatched path */}
        <Route path="/*" element={<UnmatchedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
