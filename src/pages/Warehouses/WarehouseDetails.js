import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import WarehouseDetailsContainer from "../../components/Warehouse/WarehouseDetailsContainer";

function WarehouseDetails() {
  return (
    <div>
      <Header activeNavItem="warehouses" />
      <WarehouseDetailsContainer />
      <Footer />
    </div>
  );
}

export default WarehouseDetails;
