import FormTxtInput from "../../FormInputs/FormTxtInput/FormTxtInput";
import './_WarehouseDetails.scss'
export default function WarehouseDetails({ warehouseDetails, handleFormChange, formData }) {
    if (!warehouseDetails || Object.entries(warehouseDetails).length === 0) return (<div>Loading...</div>)

    return (
        <div className="warehouse-details" >
            <h2 className='warehouse-details__heading'>
                Warehouse Details
            </h2>
            <div className="form-container">
                <FormTxtInput
                    name='warehouse_name'
                    type='text'
                    heading='warehouse name'
                    placeholderText={warehouseDetails.warehouse_name}
                    onChange={handleFormChange} />
                <FormTxtInput
                    name='address'
                    type='text'
                    heading='Street Address'
                    value={formData.address}
                    placeholderText={warehouseDetails.address}
                    onChange={handleFormChange} />
                <FormTxtInput
                    name='city'
                    type='text'
                    heading='City'
                    value={formData.city}
                    placeholderText={warehouseDetails.city}
                    onChange={handleFormChange} />
                <FormTxtInput
                    name='country'
                    type='text'
                    heading='Country'
                    value={formData.country}
                    placeholderText={warehouseDetails.country}
                    onChange={handleFormChange} />
            </div>
        </div>
    )
}