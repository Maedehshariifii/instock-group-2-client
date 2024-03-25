import InventoryCard from "../InventoryCard/InventoryCard";
import "./_InventoryContainer.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchAdd from "../SearchAdd/SearchAdd";
import TableHeadingItem from "../TableHeadingItem/TableHeadingItem";

const InventoryContainer = () => {
  const [inventoryData, setInventoryData] = useState([]);

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
      <section className="inventory-list">
        <div className="inventory-list-header-ctn">
          <h1 className="inventory-list-header-ctn__heading">Inventory</h1>
          <SearchAdd addButtonContent='+ Add New Item' />
        </div>
        <div className="inventory-list-table-heading">
          <TableHeadingItem headingTxt='inventory item' />
          <TableHeadingItem headingTxt='category' />
          <TableHeadingItem headingTxt='status' />
          <TableHeadingItem headingTxt='qty' />
          <TableHeadingItem headingTxt='warehouse' />
          <TableHeadingItem headingTxt='actions' />
        </div>

        {/* mapping the inventory list */}
        {inventoryData.map((item) => {
          return <InventoryCard key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default InventoryContainer;
