import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import editIcon from "../../assets/icons/edit-24px.svg";
import InventoryList from "../../components/Inventory/InventoryList";

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
      Warehouse Details here...
      <InventoryList />
      <Footer />
    </>
  );
}

export default WarehouseDetails;
