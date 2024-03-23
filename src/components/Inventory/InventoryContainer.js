import InventoryCard from "./InventoryCard";
import "./InventoryContainer.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";

const InventoryContainer = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [warehousesData, setWareHousesdata] = useState([]);

  // This useEffect fetches the inventory data when the component mounts
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const resp = await axios.get("http://localhost:8080/api/inventories");
        console.log(resp.data);
        setInventoryData(resp.data);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };
    fetchInventory();
  }, []);

  return (
    <>
      <section className="card-container">
        <h1 className="page-heading">Inventory</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="search__input"
          />
          <button className="search__button"></button>
        </div>
        <button className="form-cta">+ Add New Warehouse</button>
        <hr></hr>
        {/* mapping the inventory list */}
        {inventoryData.map((item) => {
          return <InventoryCard key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default InventoryContainer;
