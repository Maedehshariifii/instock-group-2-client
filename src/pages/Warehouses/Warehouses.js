import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import WarehouseContainer from "../../components/Warehouse/WarehouseContainer";
import { Routes, Route } from "react-router-dom";
import WarehouseInput from "../../components/WarehouseInput/WarehouseInput";

function Warehouses() {
  return (
    <div>
      <Header activeNavItem="warehouses" />
      <Routes>
        <Route path="/" element={<WarehouseContainer />} />
        <Route path=":id/edit" element={<WarehouseInput />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Warehouses;
