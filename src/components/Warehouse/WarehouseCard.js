import "./WarehouseCard.scss";
import RightChevron from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteWarehouse from "../Dialog/DeleteWarehouse";
import { useRef, useState, useEffect } from "react";

const WarehouseCard = ({ item }) => {
  const navigate = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const id = item.id;
  const idWarehouseRef = useRef();
  const [dialog, setDialog] = useState({
    warehouseName: "",
    isLoading: false,
  });

  const handleWarehouseClick = (id) => {
    navigate(`/warehouses/${id}/inventories`);
  };

  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:8080/api/warehouses/${id}`
        );
        setWarehouses(resp.data);
      } catch (error) {
        console.error("Error fetching a warehouse data:", error);
      }
    };
    fetchWarehouse();
  }, [id]);

  const handleDialog = (warehouseName, isLoading) => {
    setDialog({
      warehouseName,
      isLoading,
    });
  };

  const deleteWarehouse = async () => {
    let response = null;
    try {
      response = await axios.delete(
        `http://localhost:8080/api/warehouses/${id}`
      );
    } catch (err) {
      console.error(err);
    }
    if (response.data) {
      return response.data;
    } else {
      return null;
    }
  };

  const handleDeleteWarehouse = (e, id) => {
    e.preventDefault();

    handleDialog(warehouses.warehouse_name, true);

    idWarehouseRef.current = id;

    setWarehouses(warehouses);
  };

  const areUSureUWantToDelete = (choose) => {
    if (choose) {
      deleteWarehouse();
      window.location.reload();
    } else {
      handleDialog(warehouses.warehouse_name, false);
    }
  };

  return (
    <>
      <hr className="warehouse-card__divider"></hr>
      <div className="warehouse-card">
        <div className="warehouse-card__layout">
          <div className="warehouse-card__layout--left">
            <h4 className="warehouse-card__heading--mobile">WAREHOUSE</h4>
            <p
              className="warehouse-card__item"
              onClick={() => handleWarehouseClick(item.id)}
            >
              {item.warehouse_name}
              <img
                src={RightChevron}
                alt="Right Chevron"
                className="warehouse-card__icon"
              />
            </p>
            <h4 className="warehouse-card__heading--mobile">ADDRESS</h4>
            <p className="warehouse-card__item-details">{`${item.address}, ${item.city}, ${item.country}`}</p>
          </div>
          <div className="warehouse-card__layout--right">
            <h4 className="warehouse-card__heading--mobile">CONTACT NAME</h4>
            <p className={`warehouse-card__item-details`}>
              {item.contact_name}
            </p>
            <h4 className="warehouse-card__heading--mobile">
              CONTACT INFORMATION
            </h4>
            <p className="warehouse-card__item-details">
              {item.contact_phone}
              <br />
              {item.contact_email}
            </p>
          </div>
        </div>
        <div className="warehouse-card__edit-delete">
          <div
            className="warehouse-card__delete"
            onClick={(e) => handleDeleteWarehouse(e, item.id)}
          >
            <img
              src={DeleteIcon}
              alt="Detail"
              className="warehouse-card__icon"
            />
          </div>

          <img src={EditIcon} alt="Detail" className="warehouse-card__icon" />
        </div>
        {dialog.isLoading && (
          <DeleteWarehouse
            onDialog={areUSureUWantToDelete}
            key={item.id}
            item={item}
          />
        )}
      </div>

      {/* warehouse details rendering for desktop and tablet. 
      The details rendered remain the same as mobile, 
      but it's much easier to style and re-style */}
      <div className="warehouse-card--tablet">
        <h4 className="warehouse-card__heading--mobile">WAREHOUSE</h4>
        <p
          className="warehouse-card__item"
          onClick={() => handleWarehouseClick(item.id)}
        >
          {item.warehouse_name}
          <img
            src={RightChevron}
            alt="Right Chevron"
            className="warehouse-card__icon"
          />
        </p>
        <h4 className="warehouse-card__heading--mobile">ADDRESS</h4>
        <p className="warehouse-card__item-details">{`${item.address}, ${item.city}, ${item.country}`}</p>
        <h4 className="warehouse-card__heading--mobile">STATUS</h4>
        <p className={`warehouse-card__item-details`}>{item.contact_name}</p>
        <h4 className="warehouse-card__heading--mobile">QTY</h4>
        <p className="warehouse-card__item-details">
          {item.contact_phone}
          <br />
          {item.contact_email}
        </p>
        <div className="warehouse-card__edit-delete">
          <div
            className="warehouse-card__delete"
            onClick={(e) => handleDeleteWarehouse(e, item.id)}
          >
            <img
              src={DeleteIcon}
              alt="Detail"
              className="warehouse-card__icon"
            />
          </div>

          <img src={EditIcon} alt="Detail" className="warehouse-card__icon" />
        </div>
        {dialog.isLoading && (
          <DeleteWarehouse
            onDialog={areUSureUWantToDelete}
            key={item.id}
            item={item}
          />
        )}
      </div>
    </>
  );
};

export default WarehouseCard;
