import "./InventoryList.scss";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import InventoryCard from "../../components/Inventory/InventoryCard";
import SortIcon from "../../assets/icons/sort-24px.svg";

const InventoryList = () => {
  const [warehouseInventoryData, setWarehouseInventoryData] = useState([]);
  const { id } = useParams();
  // This useEffect fetches inventory data of a warehouse with specific Id
  useEffect(() => {
    const fetchInventoriesByWarehouseId = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:8080/api/warehouses/${id}/inventories`
        );
        setWarehouseInventoryData(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.error("Error fetching inventories of a warehouse data:", error);
      }
    };
    fetchInventoriesByWarehouseId();
  }, [id]);

  return (
    <>
      <section className="warehouse-inv-list">
        <div className="card-container__table-heading">
          <h4 className="inventory-card__heading">
            INVENTORY ITEM
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="inventory-card__icon"
            />
          </h4>
          <h4 className="inventory-card__heading">
            CATEGORY
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="inventory-card__icon"
            />
          </h4>
          <h4 className="inventory-card__heading">
            STATUS
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="inventory-card__icon"
            />
          </h4>
          <h4 className="inventory-card__heading">
            QTY
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="inventory-card__icon"
            />
          </h4>
          <h4 className="inventory-card__heading__warehouse-label">
            WAREHOUSE
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="inventory-card__icon"
            />
          </h4>
          <h4 className="inventory-card__heading">ACTIONS </h4>
        </div>
        {warehouseInventoryData.map((item) => {
          return <InventoryCard key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default InventoryList;
