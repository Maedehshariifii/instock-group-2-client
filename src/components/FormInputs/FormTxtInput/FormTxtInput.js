import './_FormTxtInput.scss'

export default function FormTxtInput({ heading, placeholderText }) {
    return (
        <div className="form-group">
            <label htmlFor={heading}>{heading}</label>
            <input
                type="text"
                id={heading}
                name={heading}
                // value={value}
                // onChange={onChange}
                placeholder={placeholderText}
                className="form-control"
            />
        </div>
    )
}