import { useState } from 'react';
import './_RadioGroupInput.scss'

export default function RadioGroupInput({ option1, option2 }) {
    const [selectedOption, setSelectedOption] = useState('inStock');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="radio-group">
            <label>
                <input
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
                    type="radio"
                    value={option2}
                    checked={selectedOption === option2}
                    onChange={handleOptionChange}
                />
                Out of Stock
            </label>
        </div>
    )
}