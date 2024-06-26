import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InventoryContainer from "../../components/Inventory/InventoryContainer";
import InventoryDetails from "../../components/Inventory/InventoryDetails";
import InventoryItemInput from "../../components/InventoryItemInput/InventoryItemInput";
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
        {/* Render the details view */}
        <Route path=":id/edit" element={<InventoryItemInput />} />

        {/* Route for Add Inventory form */}
        <Route path="/add" element={<AddInventory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Inventory;
