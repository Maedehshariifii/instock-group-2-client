import "./_InventoryCard.scss";
import RightChevron from "../../assets/icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryCard = ({ item }) => {
  const stockStatus = item.status === "In Stock" ? 'in-stock' : 'out-of-stock';
  return (
    <>
      <hr className="inventory-card__divider"></hr>
      <div className="inv-card">
        <div className="inv-card-text-ctn">

          <div className="inv-card-txt-item">
            <h4 className="inv-card-txt-item__heading">INVENTORY ITEM</h4>
            <p className="inv-card-txt-item__content">
              {item.item_name}
              <img
                src={RightChevron}
                alt="Right Chevron"
                className="inv-card-text__chevron"
              />
            </p>
          </div>
          <InventoryItem txtContent={item.category} heading='category' />
          <InventoryItem txtContent={item.status.toUpperCase()} heading='status' stockStatus={stockStatus} />
          <InventoryItem txtContent={item.quantity} heading='qty' />

          {/* empty div for content organizing purpose */}
          <div className="inv-card-txt-item empty"></div>

          <InventoryItem txtContent={item.warehouse_name} heading='warehouse' />

        </div>
        <div className="inv-card-icon-ctn">
          <img src={DeleteIcon} alt="Detail" className="inventory-card__icon" />
          <img src={EditIcon} alt="Detail" className="inventory-card__icon" />
        </div>
      </div>
    </>
  );
};

export default InventoryCard;
