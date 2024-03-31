import { useState } from 'react';
import './_FormDropDownInput.scss'

export default function FormDropDownInput({ name, heading, options, onDropDownSelected, value }) {
    const [selectedValue, setSelectedValue] = useState(value)

    const handleSelectedOption = (event) => {
        setSelectedValue(event.target.value)
        onDropDownSelected(name, event.target.value)
    }

    if (!options || Object.entries(options).length === 0) return (<div>Loading...</div>)
    return (
        <div className='form-dropdownlist-ctn'>
            <h3>
                {heading}
            </h3>
            <select
                className='form-dropdownlist-ctn__list'
                name={name}
                value={selectedValue}
                onChange={handleSelectedOption}>
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
