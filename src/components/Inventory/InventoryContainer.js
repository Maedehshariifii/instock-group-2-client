import InventoryCard from "./InventoryCard";
import SortIcon from "../../assets/icons/sort-24px.svg";
import "./InventoryContainer.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InventoryContainer = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const navigate = useNavigate();

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
      <section className="card-container">
        <h1 className="card-container__heading">Inventory</h1>
        <div className="card-container__cta">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="search__input"
            />
            <button className="search__button"></button>
          </div>
          <button
            className="form-cta"
            onClick={() => {
              navigate(`/inventory/add`);
            }}
          >
            + Add New Item
          </button>
        </div>
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
          <h4 className="inventory-card__heading">
            WAREHOUSE
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="inventory-card__icon"
            />
          </h4>
          <h4 className="inventory-card__heading">ACTIONS </h4>
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
