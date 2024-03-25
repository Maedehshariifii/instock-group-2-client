import "./WarehouseCard.scss";
import RightChevron from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import { useNavigate } from "react-router-dom";

const WarehouseCard = ({ item }) => {
  const navigate = useNavigate();

  const handleWarehouseClick = (id) => {
    navigate(`/warehouses/${id}`);
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
          <img src={DeleteIcon} alt="Detail" className="warehouse-card__icon" />
          <img src={EditIcon} alt="Detail" className="warehouse-card__icon" />
        </div>
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
          <img src={DeleteIcon} alt="Detail" className="warehouse-card__icon" />
          <img src={EditIcon} alt="Detail" className="warehouse-card__icon" />
        </div>
      </div>
    </>
  );
};

export default WarehouseCard;
