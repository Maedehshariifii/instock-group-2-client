import { useState } from "react";
import "./AddInventory.scss";

const AddInventory = () => {
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
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please enter a brief item description..."
            className="form-input--description"
          />
          <br></br>

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
            {/* Add your categories here */}
            <option value="category1">Electronics</option>
            <option value="category2">Gear</option>
            <option value="category3">Apparel</option>
            <option value="category4">Accessories</option>
            <option value="category5">Health</option>
            {/* ... other options ... */}
          </select>

          <hr className="inventory-card__divider"></hr>

          <h2 className="form-heading">Item Availability</h2>
          <label className="form-label">Status</label>
          <br></br>
          <label className="form-label">Quantity</label>
          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="0"
            className="form-input"
          />
          <br></br>

          <label className="form-label">
            Warehouse
            <input
              name="warehouse"
              value={formData.warehouse}
              onChange={handleChange}
              placeholder="Please select"
              className="form-input"
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
