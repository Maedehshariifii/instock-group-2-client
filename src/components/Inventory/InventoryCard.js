import "./InventoryCard.scss";
import RightChevron from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";

const InventoryCard = ({ item }) => {
  // Manually replace spaces with hyphens and convert to lowercase for class names
  const statusClass = item.status.split(" ").join("-").toLowerCase();

  return (
    <>
      <div className="inventory-card">
        <h4 className="inventory-card__heading">INVENTORY ITEM</h4>
        <p className="inventory-card__item">
          {item.item_name}
          <img
            src={RightChevron}
            alt="Right Chevron"
            className="inventory-card__icon"
          />
        </p>
        <h4 className="inventory-card__heading">STATUS</h4>
        <p
          className={`inventory-card__status inventory-card__status--${statusClass}`}
        >
          {item.status.toUpperCase()}
        </p>
        <h4 className="inventory-card__heading">CATEGORY</h4>
        <p className="inventory-card__item-details">{item.category}</p>
        <h4 className="inventory-card__heading">QTY</h4>
        <p className="inventory-card__item-details">{item.quantity}</p>
        <h4 className="inventory-card__heading">WAREHOUSE</h4>
        <p className="inventory-card__item-details">{item.warehouse_name}</p>
        <div className="inventory-card__edit-delete">
          <img src={DeleteIcon} alt="Detail" className="inventory-card__icon" />
          <img src={EditIcon} alt="Detail" className="inventory-card__icon" />
        </div>
      </div>
      <hr className="inventory-card__divider"></hr>
    </>
  );
};

export default InventoryCard;
