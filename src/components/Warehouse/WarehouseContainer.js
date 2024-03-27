import SearchAdd from "../SearchAdd/SearchAdd";
import TableHeadingItem from "../TableHeadingItem/TableHeadingItem";
import "./_WarehouseContainer.scss";

import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "../TableRow/TableRow";

const WarehouseContainer = () => {
  const [warehouseData, setWarehouseData] = useState([]);

  // This useEffect fetches the Warehouse data when the component mounts
  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const resp = await axios.get("http://localhost:8080/api/warehouses");
        setWarehouseData(resp.data);
      } catch (error) {
        console.error("Error fetching Warehouse data:", error);
      }
    };
    fetchWarehouse();
  }, []);
  return (
    <>
      <section className="warehouse-list">
        <div className="warehouse-list-header-ctn">
          <h1 className="warehouse-list-header-ctn__heading">Warehouse</h1>
          <SearchAdd addButtonContent='+ Add New Item' />
        </div>
        <div className="warehouse-list-table-heading">
          <TableHeadingItem headingTxt='warehouse' />
          <TableHeadingItem headingTxt='address' />
          <TableHeadingItem headingTxt='contact name' />
          <TableHeadingItem headingTxt='contact information' />
          <TableHeadingItem headingTxt='actions' />
        </div>

        {warehouseData.map((warehouse) => {
          return (
            <TableRow
              key={warehouse.id}
              field1Heading='warehouse'
              field1Content={warehouse.warehouse_name}
              field2Heading='address'
              field2Content={`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
              field3Heading='contact name'
              field3Content={warehouse.contact_name}
              field4Heading='contact information'
              field4Content={`${warehouse.contact_phone} ${warehouse.contact_email}`}
            />
          );
        })}
      </section>
    </>
  );
};

export default WarehouseContainer;
