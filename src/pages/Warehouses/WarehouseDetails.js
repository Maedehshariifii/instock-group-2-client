import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import WarehouseDetailsContainer from "../../components/Warehouse/WarehouseDetailsContainer";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function WarehouseDetails() {
  const [selectedWarehouseData, setSelectedWarehouseData] = useState([]);
  const { id } = useParams();
  // This useEffect fetches the Warehouse data with specific Id
  useEffect(() => {
    const fetchWarehouseById = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:8080/api/warehouses/${id}`
        );
        setSelectedWarehouseData(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.error("Error fetching Warehouse data:", error);
      }
    };
    fetchWarehouseById();
  }, [id]);

  return (
    <>
      <Header activeNavItem="warehouses" />
      <WarehouseDetailsContainer />
      <Footer />
    </>
  );
}

export default WarehouseDetails;
