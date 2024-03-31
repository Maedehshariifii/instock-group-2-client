import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InventoryContainer from "../../components/Inventory/InventoryContainer";
import InventoryDetails from "../../components/Inventory/InventoryDetails";
import AddInventory from "../../components/Inventory/AddInventory";

import { Routes, Route } from "react-router-dom";

function Inventory() {
  return (
    <div>
      <Header activeNavItem="inventory" />
      <Routes>
        <Route path="/" element={<InventoryContainer />} />
        {/* Render the list view */}
        <Route path=":id" element={<InventoryDetails />} />
        {/* Route for Add Inventory form */}
        <Route path="/add" element={<AddInventory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Inventory;
