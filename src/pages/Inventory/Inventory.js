import Header from "../../components/Header/Header";
import InventoryContainer from "../../components/Inventory/InventoryContainer";

function Inventory() {
  return (
    <div>
      <Header activeNavItem="inventory" />
      <InventoryContainer />
    </div>
  );
}

export default Inventory;
