import { useState } from "react";
import "./AddInventory.scss";
import { useNavigate } from "react-router-dom";

import BackIcon from "../../assets/icons/arrow_back-24px.svg";

const AddInventory = () => {
  const navigate = useNavigate();

  const initialState = {
    itemName: "",
    description: "",
    category: "",
    status: "In stock", // default status
    quantity: "",
    warehouse: "",
  };

  // State to keep track of form data
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <div className="card-container">
        <h2 className="card-container__heading">
          <img
            src={BackIcon}
            alt="Back Icon"
            className="inventory-card__icon"
            onClick={() => {
              navigate(`/inventory`);
            }}
          />
          Add New Inventory Item
        </h2>
        <hr className="inventory-card__divider"></hr>

        <from>
          <h2 className="form-heading">Item Details</h2>

          {/* name Input */}
          <label className="form-label">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="Item Name"
            className="form-input"
          />
          <br></br>

          {/* Description Input */}
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please enter a brief item description..."
            className="form-input--description"
          />
          <br></br>

          {/* Category selection */}
          <label className="form-label">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            defaultValue="" // Makes "Please select" the default value
            className="form-input"
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="category1">Electronics</option>
            <option value="category2">Gear</option>
            <option value="category3">Apparel</option>
            <option value="category4">Accessories</option>
            <option value="category5">Health</option>
          </select>
          <hr className="inventory-card__divider"></hr>
          <h2 className="form-heading">Item Availability</h2>

          {/* status selection */}
          <label className="form-label">Status</label>
          <div>
            <input type="radio" value="In Stock" name="status" /> In stock
            <input
              type="radio"
              value="Out of Stock"
              name="status"
              className="status--right"
            />
            Out of Stock
          </div>
          <br></br>

          {/* Quantity Input */}
          <label className="form-label">Quantity</label>
          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="0"
            className="form-input"
          />
          <br></br>

          {/* Warehouse selection */}
          <label className="form-label">Warehouse</label>
          <select
            name="warehouse"
            value={formData.warehouse}
            onChange={handleChange}
            defaultValue=""
            className="form-input"
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="warehouse1">warehouse</option>
            <option value="warehouse2">warehouse</option>
            <option value="warehouse3">warehouse</option>
            <option value="warehouse4">warehouse</option>
            <option value="warehouse5">warehouse</option>
          </select>
          <br></br>
        </from>
        <div className="cta">
          <button className="form-cta--cancel">Cancel</button>
          <button className="form-cta--add">+ Add Item</button>
        </div>
      </div>
    </>
  );
};
export default AddInventory;
