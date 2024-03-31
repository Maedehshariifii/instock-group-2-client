import SortIcon from "../../assets/icons/sort-24px.svg";
import "./WarehouseContainer.scss";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WarehouseCard from "./WarehouseCard";

const WarehouseContainer = () => {
  const [WarehouseData, setWarehouseData] = useState([]);
  const navigate = useNavigate();

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
      <section className="card-container">
        <h1 className="card-container__heading">Warehouse</h1>
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
              navigate(`/warehouses/add`);
            }}
          >
            + Add New Item
          </button>
        </div>
        <div className="card-container__table-heading">
          <h4 className="warehouse-card__heading">
            WAREHOUSE
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="warehouse-card__icon"
            />
          </h4>
          <h4 className="warehouse-card__heading">
            ADDRESS
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="warehouse-card__icon"
            />
          </h4>
          <h4 className="warehouse-card__heading">
            CONTACT NAME
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="warehouse-card__icon"
            />
          </h4>
          <h4 className="warehouse-card__heading">
            CONTACT INFORMATION
            <img
              src={SortIcon}
              alt="Sort Icon"
              className="warehouse-card__icon"
            />
          </h4>
          <h4 className="warehouse-card__heading">ACTIONS </h4>
        </div>

        {WarehouseData.map((item) => {
          return <WarehouseCard key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default WarehouseContainer;
