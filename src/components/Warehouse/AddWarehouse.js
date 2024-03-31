import { useState } from "react";
import "./AddWarehouse.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const AddWarehouse = () => {
  const navigate = useNavigate();

  const initialState = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
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
      warehouse_name: "Warehouse name missing",
      address: "Warehouse address missing",
      city: "Warehouse city missing",
      country: "Warehouse country missing",
      contact_name: "Contact name missing",
      contact_position: "Contact position missing",
      contact_phone: "Contact phone missing",
      contact_email: "Contact email missing",
    };

    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone number validation regex pattern
    const phoneRegex = /^\d{10}$/;

    // Check for missing required fields
    Object.keys(validations).forEach((key) => {
      if (!inputValues[key]) {
        errors[key] = validations[key];
      }
    });

    // Validate email format only if the email field is not empty
    if (
      inputValues.contact_email &&
      !emailRegex.test(inputValues.contact_email)
    ) {
      errors.contact_email = "Please enter a valid email address";
    }

    // Validate phone number format only if the phone field is not empty
    if (
      inputValues.contact_phone &&
      !phoneRegex.test(inputValues.contact_phone)
    ) {
      errors.contact_phone = "Please enter a valid 10-digit phone number";
    }

    console.log(errors);
    return errors;
  };

  //Function to handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrors(validateForm(formData));
      await axios.post("http://localhost:8080/api/warehouses", formData);
      navigate(`/warehouses`);
    } catch (error) {
      console.error("Error posting Warehouse data:", error);
    }
  };

  return (
    <>
      <Header activeNavItem="warehouses" />
      <div className="card-container">
        <h2 className="card-container__heading">
          <img
            src={BackIcon}
            alt="Back Icon"
            className="inventory-card__icon"
            onClick={() => {
              navigate(`/warehouses`);
            }}
          />
          Add New Warehouse
        </h2>
        <hr className="inventory-card__divider"></hr>
        <form>
          <div className="add-warehouse-container">
            <div className="add-warehouse-container__column-1">
              <h2 className="form-heading-add-warehouse">Warehouse Details</h2>

              <label className="form-label-add-warehouse">Warehouse Name</label>
              <input
                type="text"
                name="warehouse_name"
                value={formData.warehouse_name}
                onChange={handleChange}
                placeholder="Warehouse Name"
                className="form-input-add-warehouse"
              />
              {errors.warehouse_name ? (
                <p className="form-error">
                  <img
                    src={ErrorIcon}
                    alt="Error Icon"
                    className="form-error__icon"
                  />
                  {` ${errors.warehouse_name}`}
                </p>
              ) : null}
              <br></br>
              <label className="form-label-add-warehouse">Street Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address"
                className="form-input-add-warehouse"
              />
              {errors.address ? (
                <p className="form-error">
                  <img
                    src={ErrorIcon}
                    alt="Error Icon"
                    className="form-error__icon"
                  />
                  {` ${errors.address}`}
                </p>
              ) : null}
              <br></br>
              <label className="form-label-add-warehouse">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="form-input-add-warehouse"
              />
              {errors.city ? (
                <p className="form-error">
                  <img
                    src={ErrorIcon}
                    alt="Error Icon"
                    className="form-error__icon"
                  />
                  {` ${errors.city}`}
                </p>
              ) : null}
              <br></br>
              <label className="form-label-add-warehouse">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="form-input-add-warehouse"
              />
              {errors.country ? (
                <p className="form-error">
                  <img
                    src={ErrorIcon}
                    alt="Error Icon"
                    className="form-error__icon"
                  />
                  {` ${errors.country}`}
                </p>
              ) : null}
              <br></br>
            </div>
            <div className="add-warehouse-container__column-2">
              <h2 className="form-heading-add-warehouse">Contact Details</h2>
              <label className="form-label-add-warehouse">Contact Name</label>
              <input
                type="text"
                name="contact_name"
                value={formData.contact_name}
                onChange={handleChange}
                placeholder="Contact Name"
                className="form-input-add-warehouse"
              />
              {errors.contact_name ? (
                <p className="form-error">
                  <img
                    src={ErrorIcon}
                    alt="Error Icon"
                    className="form-error__icon"
                  />
                  {` ${errors.contact_name}`}
                </p>
              ) : null}
              <br></br>
              <label className="form-label-add-warehouse">Position</label>
              <input
                type="text"
                name="contact_position"
                value={formData.contact_position}
                onChange={handleChange}
                placeholder="Position"
                className="form-input-add-warehouse"
              />
              {errors.contact_position ? (
                <p className="form-error">
                  <img
                    src={ErrorIcon}
                    alt="Error Icon"
                    className="form-error__icon"
                  />
                  {` ${errors.contact_position}`}
                </p>
              ) : null}
              <br></br>
              <label className="form-label-add-warehouse">Phone Number</label>
              <input
                type="text"
                name="contact_phone"
                value={formData.contact_phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="form-input-add-warehouse"
              />
              {errors.contact_phone ? (
                <p className="form-error">
                  <img
                    src={ErrorIcon}
                    alt="Error Icon"
                    className="form-error__icon"
                  />
                  {` ${errors.contact_phone}`}
                </p>
              ) : null}
              <br></br>
              <label className="form-label-add-warehouse">Email</label>
              <input
                type="text"
                name="contact_email"
                value={formData.contact_email}
                onChange={handleChange}
                placeholder="Email"
                className="form-input-add-warehouse"
              />
              {errors.contact_email ? (
                <p className="form-error">
                  <img
                    src={ErrorIcon}
                    alt="Error Icon"
                    className="form-error__icon"
                  />
                  {` ${errors.contact_email}`}
                </p>
              ) : null}
              <br></br>
            </div>
          </div>
        </form>
        <div className="cta-add-warehouse">
          <button
            className="form-cta--cancel-add-warehouse"
            onClick={() => {
              navigate(`/warehouses`);
            }}
          >
            Cancel
          </button>
          <button
            className="form-cta--add-add-warehouse"
            onClick={handleSubmit}
          >
            + Add Warehouse
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AddWarehouse;
