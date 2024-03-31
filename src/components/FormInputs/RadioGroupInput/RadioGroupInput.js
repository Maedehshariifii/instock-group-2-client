import { useState } from 'react';
import './_RadioGroupInput.scss'

export default function RadioGroupInput({ option1, option2, name, onRadioSelected }) {
    const [selectedOption, setSelectedOption] = useState('inStock');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        onRadioSelected(name, selectedOption)
    };

    return (
        <div className="radio-group">
            <h3>Status</h3>
            <div className='radio-btn-container'>
                <label>
                    <input
                        name={name}
                        type="radio"
                        value={option1}
                        checked={selectedOption === option1}
                        onChange={handleOptionChange}
                    />
                    In Stock
                </label>
                <br />
                <label>
                    <input
                        name={name}
                        type="radio"
                        value={option2}
                        checked={selectedOption === option2}
                        onChange={handleOptionChange}
                    />
                    Out of Stock
                </label>
            </div>
        </div>
    )
}