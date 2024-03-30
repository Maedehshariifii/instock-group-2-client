import RadioGroupInput from "../../FormInputs/RadioGroupInput/RadioGroupInput"
import FormDropDownInput from "../../FormInputs/FormDropDownInput/FormDropDownInput";
import "./_ItemAvailabilityInput.scss"

export default function ItemAvailabilityInput({ warehouses, handleWarehouseSelect }) {

    const onWarehouseSelect = (warehouse) => {
        handleWarehouseSelect(warehouse);
    }

    return (
        <div className="item-availability">
            <h2>
                item availability
            </h2>
            <div className='form-container'>
                <RadioGroupInput option1='in stock' option2='out of stock' />
                <FormDropDownInput
                    heading='Warehouses'
                    options={warehouses}
                    onDropDownSelected={onWarehouseSelect} />
            </div>
        </div>
    )
}