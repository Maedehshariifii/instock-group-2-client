import FormTxtInput from "../../FormInputs/FormTxtInput/FormTxtInput";
import './_ContactDetails.scss'

export default function ContactDetails({ warehouseDetails, handleFormChange, formData }) {
    // stop page from rendering further and crash if props are not fully loaded
    if (!warehouseDetails || Object.entries(warehouseDetails).length === 0) return (<div>Loading...</div>)
    return (
        <div className="contact-details" >
            <h2 className='contact-details__heading'>
                Contact Details
            </h2>
            <div className="form-container">
                <FormTxtInput
                    name='contact_name'
                    type='text'
                    heading='Contact Name'
                    placeholderText={warehouseDetails.contact_name}
                    onChange={handleFormChange} />
                <FormTxtInput
                    name='contact_position'
                    type='text'
                    heading='Position'
                    value={formData.contact_position}
                    placeholderText={warehouseDetails.contact_position}
                    onChange={handleFormChange} />
                <FormTxtInput
                    name='contact_phone'
                    type='text'
                    heading='Phone Number'
                    value={formData.contact_phone}
                    placeholderText={warehouseDetails.contact_phone}
                    onChange={handleFormChange} />
                <FormTxtInput
                    name='contact_email'
                    type='text'
                    heading='Email'
                    value={formData.contact_email}
                    placeholderText={warehouseDetails.contact_email}
                    onChange={handleFormChange} />
            </div>
        </div>
    )
}