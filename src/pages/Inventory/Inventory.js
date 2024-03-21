import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InventoryContainer from "../../components/Inventory/InventoryContainer";

function Inventory() {
  return (
    <div>
      <Header activeNavItem="inventory" />
      <InventoryContainer />
      <Footer />
    </div>
  );
}

export default Inventory;
