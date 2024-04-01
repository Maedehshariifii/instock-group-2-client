import editIcon from "../../assets/icons/edit-white-24px.svg";
import "./WarehouseDetailsContainer.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import { useParams, useNavigate } from "react-router-dom";
import SortIcon from "../../assets/icons/sort-24px.svg";

import InventoryList from "../../components/Inventory/InventoryList";

const WarehouseDetailsContainer = () => {
  const navigate = useNavigate();
  const [warehouseData, setWarehouseData] = useState([]);
  const [warehouseInventoryData, setWarehouseInventoryData] = useState([]);
  const { id } = useParams();

  // This useEffect fetches the Warehouse data when the component mounts
  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:8080/api/warehouses/${id}`
        );
        setWarehouseData(resp.data);
      } catch (error) {
        console.error("Error fetching Warehouse data:", error);
      }
    };
    fetchWarehouse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <section className="detail-card-container">
        <div className="detail-card-container__header-box">
          <img
            onClick={() => {
              navigate(`/warehouses`);
            }}
            src={BackIcon}
            alt="Edit Icon"
            className="form-cta-details__back-icon"
          />
          <h1 className="detail-card-container__heading">
            {warehouseData.warehouse_name}
          </h1>
          <button
            className="form-cta-details"
            onClick={() => {
              navigate(`/warehouses/${id}/edit`);
            }}
          >
            <img
              src={editIcon}
              alt="Edit Icon"
              className="form-cta-details__icon"
            />
            <p className="form-cta-details__text">Edit</p>
          </button>
        </div>
        <hr className="warehouse-card__divider"></hr>
        <div className="warehouse-detail-card">
          <div className="warehouse-detail-card__column-1">
            <h4 className="warehouse-card__heading">WAREHOUSE ADDRESS:</h4>
            <div className="mobile-top-row">
              <div className="medium">{`${warehouseData.address}, `}</div>
              <div className="medium">{`${warehouseData.city}, ${warehouseData.country}`}</div>
            </div>
          </div>
          <div className="warehouse-detail-card__column-2">
            <div>
              <h4 className="warehouse-card__heading">CONTACT NAME:</h4>
              <div className="medium">{`${warehouseData.contact_name}`}</div>
              <div className="medium">{`${warehouseData.contact_position}`}</div>
            </div>
            <div className="info-box">
              <h4 className="warehouse-card__heading">CONTACT INFORMATION:</h4>
              <div className="medium">{`${warehouseData.contact_phone}`}</div>
              <div className="medium">{`${warehouseData.contact_email}`}</div>
            </div>
          </div>
        </div>
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
            return <InventoryList key={item.id} item={item} />;
          })}
        </section>
      </section>
    </>
  );
};

export default WarehouseDetailsContainer;
