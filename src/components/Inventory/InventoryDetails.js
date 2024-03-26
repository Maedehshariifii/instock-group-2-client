import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";

import "./InventoryDetails.scss";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventoryDetails, setInventoryDetails] = useState({});
  const [detailsLoaded, setDetailsLoaded] = useState(false);

  const statusClass = inventoryDetails.status
    ? inventoryDetails.status.split(" ").join("-").toLowerCase()
    : ""; // Safely compute statusClass only after ensuring the data exists

  // This useEffect fetches the inventory data when the component mounts
  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:8080/api/inventories/${id}`
        );
        setInventoryDetails(resp.data);
        setDetailsLoaded(true);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };
    fetchInventoryDetails();
  });

  return (
    <>
      {detailsLoaded ? (
        <div className="card-container">
          <div className="inventory-details__card-header">
            <h1 className="card-container__heading">
              <img
                src={BackIcon}
                alt="Back Icon"
                className="inventory-card__icon"
              />
              {inventoryDetails.item_name}
            </h1>
            <button className="edit-cta">
              <img
                src={EditIcon}
                alt="Edit Icon"
                className="inventory-card__icon--details"
              />
            </button>
          </div>
          <hr className="inventory-card__divider"></hr>
          <div className="inventory-details__card">
            <h4 className="inventory-card__heading--mobile">
              ITEM DESCRIPTION:
            </h4>
            <p className="inventory-card__item-details">
              {inventoryDetails.description}
            </p>
            <h4 className="inventory-card__heading--mobile">CATEGORY:</h4>
            <p className="inventory-card__item-details">
              {inventoryDetails.category}
            </p>
            <div className="inventory-details__mobile">
              <div>
                <h4 className="inventory-card__heading--mobile">STATUS:</h4>
                <p
                  className={`inventory-card__status inventory-card__status--${statusClass}`}
                >
                  {inventoryDetails.status.toUpperCase()}
                </p>
              </div>
              <div className="inventory-details__quantity">
                <h4 className="inventory-card__heading--mobile">QUANTITY:</h4>
                <p className="inventory-card__item-details">
                  {inventoryDetails.quantity}
                </p>
              </div>
            </div>
            <h4 className="inventory-card__heading--mobile">WAREHOUSE:</h4>
            <p className="inventory-card__item-details">
              {inventoryDetails.warehouse_name}
            </p>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default InventoryDetails;