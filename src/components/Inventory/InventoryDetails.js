import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";

import "./InventoryDetails.scss";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventoryDetails, setInventoryDetails] = useState([]);

  const statusClass = inventoryDetails.status
    .split(" ")
    .join("-")
    .toLowerCase();

  // This useEffect fetches the inventory data when the component mounts
  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:8080/api/inventories/${id}`
        );
        console.log(resp.data);
        setInventoryDetails(resp.data);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };
    fetchInventoryDetails();
  }, [id]);

  return (
    <>
      <section className="card-container">
        <h1 className="card-container__heading">
          <img
            src={BackIcon}
            alt="Sort Icon"
            className="inventory-card__icon"
          />
          {inventoryDetails.item_name}
        </h1>
        <button className="edit-cta">
          <img
            src={EditIcon}
            alt="Sort Icon"
            className="inventory-card__icon"
          />
        </button>
        <hr className="inventory-card__divider"></hr>
        <h4 className="inventory-card__heading--mobile">ITEM DESCRIPTION:</h4>
        <p className="inventory-card__item-details">
          {inventoryDetails.description}
        </p>
        <h4 className="inventory-card__heading--mobile">CATEGORY:</h4>
        <p className="inventory-card__item-details">
          {inventoryDetails.category}
        </p>
        <h4 className="inventory-card__heading--mobile">STATUS</h4>
        <p
          className={`inventory-card__status inventory-card__status--${statusClass}`}
        >
          {inventoryDetails.status.toUpperCase()}
        </p>

        <h4 className="inventory-card__heading--mobile">QTY</h4>
        <p className="inventory-card__item-details">
          {inventoryDetails.quantity}
        </p>
        <h4 className="inventory-card__heading--mobile">WAREHOUSE</h4>
        <p className="inventory-card__item-details">
          {inventoryDetails.warehouse_name}
        </p>
      </section>
    </>
  );
};

export default InventoryDetails;
