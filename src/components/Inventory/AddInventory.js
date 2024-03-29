import { useState } from "react";
import "./AddInventory.scss";

const AddInventory = () => {
  const initialState = {
    itemName: "",
    description: "",
    category: "",
    status: "In stock", // default status
    quantity: 0,
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
        <h2 className="card-container__heading">Add New Inventory Item</h2>
        <hr className="inventory-card__divider"></hr>
        <from>
          <h2 className="form-heading">Item Details</h2>
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

          <label className="form-label">Description</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please enter a brief item description..."
            className="form-input--description"
          />
          <br></br>

          <label className="form-label">Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Please select"
            className="form-input"
          />
          <hr className="inventory-card__divider"></hr>

          <h2 className="form-heading">Item Availability</h2>
          <label>Status</label>
          <br></br>
          <label>Quantity</label>
          <textarea
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="0"
          ></textarea>
          <br></br>

          <label>
            Warehouse
            <textarea
              name="warehouse"
              value={formData.warehouse}
              onChange={handleChange}
              placeholder="Please select"
            />
          </label>
          <br></br>
          <button type="submit">Cancel</button>
          <button type="submit">+ Add Item</button>
        </from>
      </div>
    </>
  );
};
export default AddInventory;
