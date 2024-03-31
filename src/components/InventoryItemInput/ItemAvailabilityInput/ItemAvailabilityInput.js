import { useEffect, useState } from 'react';
import RadioGroupInput from "../../FormInputs/RadioGroupInput/RadioGroupInput"
import FormDropDownInput from "../../FormInputs/FormDropDownInput/FormDropDownInput";
import "./_ItemAvailabilityInput.scss"
import { getWarehouses } from '../../../utils/helper'
import FormTxtInput from "../../FormInputs/FormTxtInput/FormTxtInput";


export default function ItemAvailabilityInput({ handleFormChange, itemDetails, formData }) {
    // use useEffect to load item categories from API 
    const [warehouses, setWarehouses] = useState(null)
    useEffect(() => {

        const fetchData = async () => {
            try {
                const results = await getWarehouses()
                setWarehouses(results.map(({ warehouse_name }) => (warehouse_name)))
            } catch (error) {
                console.error("Error fetching Warehouse data:", error);
            }
        }
        fetchData()

    }, []);
    const onChange = (name, value) => {
        handleFormChange(name, value);
    }

    if (!itemDetails || Object.entries(itemDetails).length === 0) return (<div>Loading...</div>)

    return (
        <div className="item-availability">
            <h2>
                item availability
            </h2>
            <div className='form-container'>
                <RadioGroupInput
                    option1='in stock'
                    option2='out of stock'
                    name='status'
                    onRadioSelected={onChange} />
                {formData.status !== 'in stock' && <FormTxtInput
                    name='quantity'
                    type='number'
                    onChange={onChange}
                    heading='quantity'
                    placeholderText={itemDetails.quantity} />}
                <FormDropDownInput
                    name='warehouse_name'
                    value={formData.warehouse_name}
                    heading='Warehouses'
                    options={warehouses}
                    onDropDownSelected={onChange} />
            </div>
        </div>
    )
}