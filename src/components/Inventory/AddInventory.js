import { useRef, useState, useEffect } from "react";
import "./AddInventory.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";

const AddInventory = () => {
  const navigate = useNavigate();

  const initialState = useRef({
    item_name: "",
    description: "",
    category: "",
    status: "In Stock", // default status
    quantity: "",
    warehouse_name: "",
  });

  // State to keep track of form data
  const [formData, setFormData] = useState(initialState.current);

  //state to keep track of user errors
  const [errors, setErrors] = useState({});

  // State to track valid form submissions
  const [validSubmissionCount, setValidSubmissionCount] = useState(0);

  // State to track the submission ready version of the form data
  const [submissionData, setSubmissionData] = useState(null);

  // States to fetch and track warehouses
  const [warehouses, setWarehouses] = useState([]);
  const [warehousesLoaded, setWarehousesLoaded] = useState(false);

  // Function to handle change in form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Function to Validate user inputs
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
    if (inputValues.quantity === undefined || inputValues.quantity === "") {
      errors.quantity = "Quantity missing";
    } else if (
      isNaN(Number(inputValues.quantity)) ||
      Number(inputValues.quantity) < 0
    ) {
      errors.quantity = "Quantity must be a positive number";
    }
    return errors;
  };

  //Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Adjust formData for Out of Stock items before validation and submission
    const adjustedFormData = {
      ...formData,
      quantity: formData.status === "Out of Stock" ? "0" : formData.quantity,
    };

    const validationErrors = validateForm(adjustedFormData);
    setErrors(validationErrors);
    // If there are no errors, set shouldSubmit to true
    if (Object.keys(validationErrors).length === 0) {
      setSubmissionData(adjustedFormData); // Set adjusted data for submission
      setValidSubmissionCount((count) => count + 1); // Trigger the useEffect
    }
  };

  // Function to handle cancel button and redirect to inventory list
  const handleCancel = () => {
    navigate(`/inventory`);
  };

  // This useEffect will run once when component mounts to fetch the warehouse data for the dropdown
  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const resp = await axios.get("http://localhost:8080/api/warehouses");
        setWarehouses(resp.data);
        setWarehousesLoaded(true);
      } catch (error) {
        console.error("Failed to fetch warehouses:", error);
      }
    };
    fetchWarehouses();
  }, []);

  // This useEffect should run if no validation errors are found in the form inputs
  useEffect(() => {
    const addNewInventoryItem = async () => {
      if (submissionData && validSubmissionCount > 0) {
        try {
          await axios.post(
            "http://localhost:8080/api/inventories",
            submissionData
          );
          alert("Form submitted successfully");
          setSubmissionData(null);
          setValidSubmissionCount(0);
          setFormData(initialState.current);
        } catch (err) {
          console.error("Failed to submit form:", err);
        }
      }
    };
    addNewInventoryItem();
  }, [submissionData, validSubmissionCount, initialState]);

  return (
    <>
      {warehousesLoaded ? (
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

          <form className="form">
            <section className="form--left">
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
              <hr className="inventory-card__divider--hidden"></hr>
            </section>
            <section className="form--right">
              <h2 className="form-heading">Item Availability</h2>

              {/* status selection */}
              <label className="form-label">Status</label>
              <div className="form-input--status">
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

              {/* Conditionally render the Quantity field based on the status */}
              {formData.status === "In Stock" && (
                <div>
                  <label className="form-label">Quantity</label>
                  <input
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="0"
                    className={`form-input--quantity ${
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
                </div>
              )}

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
                {/* Dynamically render warehosue list from the fetched data*/}
                {warehouses.map((warehouse) => {
                  return (
                    <option key={warehouse.id} value={warehouse.warehouse_name}>
                      {warehouse.warehouse_name}
                    </option>
                  );
                })}
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
            </section>
          </form>

          <div className="cta">
            <button className="form-cta--cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="form-cta--add" onClick={handleSubmit}>
              + Add Item
            </button>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};
export default AddInventory;
