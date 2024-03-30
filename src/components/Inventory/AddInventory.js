import { useState } from "react";
import "./AddInventory.scss";
import { useNavigate } from "react-router-dom";

import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";

const AddInventory = () => {
  const navigate = useNavigate();

  const initialState = {
    item_name: "",
    description: "",
    category: "",
    status: "In Stock", // default status
    quantity: "",
    warehouse_name: "",
  };

  // State to keep track of form data
  const [formData, setFormData] = useState(initialState);

  //state to keep track of user errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //Function to Validate user inputs
  const validateForm = (inputValues) => {
    const errors = {};
    const validations = {
      item_name: "Item's name missing",
      description: "Item's description missing",
      category: "Item's category missing",
      status: "Status missing",
      warehouse_name: "Warehouse missing",
    };
    Object.keys(validations).forEach((key) => {
      if (!inputValues[key]) {
        errors[key] = validations[key];
      }
    });

    // Custom validation to check if quantity is a number
    if (!inputValues.quantity) {
      errors.quantity = "Quantity missing";
    } else if (
      isNaN(Number(inputValues.quantity)) ||
      Number(inputValues.quantity) < 0
    ) {
      errors.quantity = "Quantity must be a positive number";
    }

    console.log(errors);
    return errors;
  };

  //Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted:", formData);
    setErrors(validateForm(formData));
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

        <form>
          <h2 className="form-heading">Item Details</h2>

          {/* name Input */}
          <label className="form-label">Item Name</label>
          <input
            type="text"
            name="item_name"
            value={formData.item_name}
            onChange={handleChange}
            placeholder="Item Name"
            className={`form-input ${
              errors.item_name ? "form-input--error" : ""
            }`}
          />
          {errors.item_name ? (
            <p className="form-error">
              <img
                src={ErrorIcon}
                alt="Error Icon"
                className="form-error__icon"
              />
              This field is required
            </p>
          ) : null}
          <br></br>

          {/* Description Input */}
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Please enter a brief item description..."
            className={`form-input--description ${
              errors.description ? "form-input--error" : ""
            }`}
          />
          {errors.description ? (
            <p className="form-error">
              <img
                src={ErrorIcon}
                alt="Error Icon"
                className="form-error__icon"
              />
              This field is required
            </p>
          ) : null}
          <br></br>

          {/* Category selection */}
          <label className="form-label">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`form-input ${
              errors.category ? "form-input--error" : ""
            }`}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Gear">Gear</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
          </select>
          {errors.category ? (
            <p className="form-error">
              <img
                src={ErrorIcon}
                alt="Error Icon"
                className="form-error__icon"
              />
              This field is required
            </p>
          ) : null}
          <hr className="inventory-card__divider"></hr>
          <h2 className="form-heading">Item Availability</h2>

          {/* status selection */}
          <label className="form-label">Status</label>
          <div>
            <input
              type="radio"
              value="In Stock"
              name="status"
              onChange={handleChange}
              checked={formData.status === "In Stock"}
            />
            In stock
            <input
              type="radio"
              value="Out of Stock"
              name="status"
              onChange={handleChange}
              checked={formData.status === "Out of Stock"}
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
            className={`form-input ${
              errors.quantity ? "form-input--error" : ""
            }`}
          />
          {errors.quantity ? (
            <p className="form-error">
              <img
                src={ErrorIcon}
                alt="Error Icon"
                className="form-error__icon"
              />
              Enter valid quantity
            </p>
          ) : null}
          <br></br>

          {/* Warehouse selection */}
          <label className="form-label">Warehouse</label>
          <select
            name="warehouse_name"
            value={formData.warehouse_name}
            onChange={handleChange}
            className={`form-input ${
              errors.warehouse_name ? "form-input--error" : ""
            }`}
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
          {errors.warehouse_name ? (
            <p className="form-error">
              <img
                src={ErrorIcon}
                alt="Error Icon"
                className="form-error__icon"
              />
              This field is required
            </p>
          ) : null}
          <br></br>
        </form>
        <div className="cta">
          <button className="form-cta--cancel">Cancel</button>
          <button className="form-cta--add" onClick={handleSubmit}>
            + Add Item
          </button>
        </div>
      </div>
    </>
  );
};
export default AddInventory;
