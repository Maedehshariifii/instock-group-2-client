import "./InventoryList.scss";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import RightChevron from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import WarehouseDeleteModal from "../InventoryDeleteModal/InventoryDeleteModal";

const InventoryList = ({ item }) => {
  // add states to decide behaviors of delete modal
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDeleteModalToggle = () => {
    setModalVisible(!isModalVisible);
  };
  // Manually replace spaces with hyphens and convert to lowercase for class names
  const statusClass = item.status.split(" ").join("-").toLowerCase();

  const navigate = useNavigate();
  return (
    <>
      <hr className="inventory-card__divider"></hr>
      <div className="inventory-card">
        <div className="inventory-card__layout">
          <div className="inventory-card__layout--left">
            <h4 className="inventory-card__heading--mobile">INVENTORY ITEM</h4>
            <p
              className="inventory-card__item"
              onClick={() => {
                navigate(`/inventory/${item.id}`);
              }}
            >
              {item.item_name}
              <img
                src={RightChevron}
                alt="Right Chevron"
                className="inventory-card__icon"
              />
            </p>

            <h4 className="inventory-card__heading--mobile">CATEGORY</h4>
            <p className="inventory-card__item-details">{item.category}</p>
          </div>
          <div className="inventory-card__layout--right">
            <h4 className="inventory-card__heading--mobile">STATUS</h4>
            <p
              className={`inventory-card__status inventory-card__status--${statusClass}`}
            >
              {item.status.toUpperCase()}
            </p>

            <h4 className="inventory-card__heading--mobile">QTY</h4>
            <p className="inventory-card__item-details">{item.quantity}</p>
            <h4 className="inventory-card__heading--mobile__whLabel">
              WAREHOUSE
            </h4>
            <p className="inventory-card__item-details inventory-card__item-details__whName">
              {item.warehouse_name}
            </p>
          </div>
        </div>
        <div className="inventory-card__edit-delete">
          <img
            src={DeleteIcon}
            alt="Detail"
            className="inventory-card__icon"
            onClick={handleDeleteModalToggle}
          />
          <img src={EditIcon} alt="Detail" className="inventory-card__icon" />
        </div>
      </div>

      {/* Inventory details rendering for desktop and tablet. 
    The details rendered below remain the same as mobile, 
    but it's much easier to style and re-style */}
      <div className="inventory-card--tablet">
        <h4 className="inventory-card__heading--mobile">INVENTORY ITEM</h4>

        <p
          className="inventory-card__item"
          onClick={() => {
            navigate(`/inventory/${item.id}`);
          }}
        >
          {item.item_name}
          <img
            src={RightChevron}
            alt="Right Chevron"
            className="inventory-card__icon"
          />
        </p>

        <h4 className="inventory-card__heading--mobile">CATEGORY</h4>
        <p className="inventory-card__item-details">{item.category}</p>
        <h4 className="inventory-card__heading--mobile">STATUS</h4>
        <p
          className={`inventory-card__status inventory-card__status--${statusClass}`}
        >
          {item.status.toUpperCase()}
        </p>
        <h4 className="inventory-card__heading--mobile">QTY</h4>
        <p className="inventory-card__item-details--quantity">
          {item.quantity}
        </p>
        <h4 className="inventory-card__heading--mobile inventory-card__item-details__whLabel">
          WAREHOUSE
        </h4>
        <p className="inventory-card__item-details inventory-card__item-details__whName">
          {item.warehouse_name}
        </p>
        <div className="inventory-card__edit-delete">
          <img
            src={DeleteIcon}
            alt="Detail"
            className="inventory-card__icon"
            onClick={handleDeleteModalToggle}
          />
          <img src={EditIcon} alt="Detail" className="inventory-card__icon" />
        </div>
      </div>
      <hr className="inventory-card__divider--tablet"></hr>
      {isModalVisible && (
        <WarehouseDeleteModal onClose={handleDeleteModalToggle} id={item.id} />
      )}
    </>
  );
};

export default InventoryList;
