import './_FormTxtInput.scss'

export default function FormTxtInput({ name, type, heading, placeholderText, onChange }) {

    const handleChange = (event) => {
        onChange(name, event.target.value);
    };

    return (
        <div className="text-form-group">
            <label className='text-form-group__label' htmlFor={heading}>{heading}</label>
            <input
                type={type}
                id={heading}
                name={name}
                // value={value}
                onChange={handleChange}
                placeholder={placeholderText}
                className="className='text-form-group__form-field'"
                required
            />
        </div>
    )
}