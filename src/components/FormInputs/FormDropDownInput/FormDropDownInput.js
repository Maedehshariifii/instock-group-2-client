import './_FormDropDownInput.scss'

export default function FormDropDownInput({ heading, options, selectedValue, onDropDownSelected }) {
    const handleSelectedOption = (event) => {
        onDropDownSelected(event.target.value)
    }

    return (
        <div>
            <h3>
                {heading}
            </h3>
            <select value={selectedValue} onChange={handleSelectedOption}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
