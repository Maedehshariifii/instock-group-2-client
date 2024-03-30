import FormDropDownInput from "../../FormInputs/FormDropDownInput/FormDropDownInput";
import FormTxtInput from "../../FormInputs/FormTxtInput/FormTxtInput";
import "./_ItemDetailsInput.scss";

export default function ItemDetailsInput({ namePlaceHolder, descPlaceHolder, categories, onCategorySelected }) {

    const handleCategorySelected = (category) => {
        onCategorySelected(category);
    }

    return (
        <div className="ItemDetailsInput" >
            <h2>
                item details
            </h2>
            <div className="form-container">
                <FormTxtInput heading='item name' placeholderText={namePlaceHolder} />
                <FormTxtInput heading='description' placeholderText={descPlaceHolder} />
                <FormDropDownInput heading='categories' options={categories} onDropDownSelected={handleCategorySelected} />
            </div>
        </div>
    )
}