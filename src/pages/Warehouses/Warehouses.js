import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import WarehouseContainer from "../../components/Warehouse/WarehouseContainer";

function Warehouses() {
  return (
    <div>
      <Header activeNavItem="warehouses" />
      <WarehouseContainer />
      <Footer />
    </div>
  );
}

export default Warehouses;
