import "./_InventoryContainer.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchAdd from "../SearchAdd/SearchAdd";
import TableHeadingItem from "../TableHeadingItem/TableHeadingItem";
import TableRow from "../TableRow/TableRow";

const InventoryContainer = () => {
  const [inventoryData, setInventoryData] = useState([]);

  // This useEffect fetches the inventory data when the component mounts
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const resp = await axios.get("http://localhost:8080/api/inventories");
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
          return <TableRow
            key={item.id}
            field1Heading='inventory item'
            field1Content={item.item_name}
            field2Heading='category'
            field2Content={item.category}
            field3Heading='status'
            field3Content={item.status}
            field4Heading='qty'
            field4Content={item.quantity}
            field5Heading='warehouse'
            field5Content={item.warehouse_name}
            statusProp={item.status}
          />;
        })}
      </section>
    </>
  );
};

export default InventoryContainer;
