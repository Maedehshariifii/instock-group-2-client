import { useEffect, useState } from 'react';
import FormDropDownInput from "../../FormInputs/FormDropDownInput/FormDropDownInput";
import FormTxtInput from "../../FormInputs/FormTxtInput/FormTxtInput";
import "./_ItemDetailsInput.scss";
import { getCategories } from '../../../utils/helper'

export default function ItemDetailsInput({ itemDetails, handleFormChange, formData }) {
    // use useEffect to load item categories from API 
    const [categories, setCategories] = useState(null)
    useEffect(() => {
        getCategories().then(data => setCategories(data.data));
    }, []);

    const handleCategorySelected = (name, value) => {
        console.log('item details: ', name, value)
        handleFormChange(name, value);
    }

    if (!itemDetails || Object.entries(itemDetails).length === 0) return (<div>Loading...</div>)

    return (
        <div className="item-details-input" >
            <h2 className='item-details-input__heading'>
                item details
            </h2>
            <div className="form-container">
                <FormTxtInput
                    name='item_name'
                    type='text'
                    heading='item name'
                    placeholderText={itemDetails.item_name}
                    onChange={handleCategorySelected} />
                <FormTxtInput
                    name='description'
                    type='textarea'
                    heading='description'
                    value={formData.categories}
                    placeholderText={itemDetails.description}
                    onChange={handleCategorySelected} />
                <FormDropDownInput
                    name='category'
                    heading='categories'
                    options={categories}
                    value={formData.category}
                    onDropDownSelected={handleCategorySelected} />
            </div>
        </div>
    )
}