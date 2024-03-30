import { useParams } from 'react-router-dom'
import ItemAvailabilityInput from './ItemAvailabilityInput/ItemAvailabilityInput'
import ItemDetailsInput from './ItemDetailsInput/ItemDetailsInput'
import './_InventoryItemInput.scss'
import { useEffect, useState } from 'react';
import { fetchInventoryById, getCategories, getWarehouses } from '../../utils/helper'

export default function InventoryItemInput(props) {
    // extract inventory id from
    const { id } = useParams();

    // use useState to store item detail and set new detail
    const [itemDetails, setItemDetails] = useState(null)
    const [categoryOptions, setCategoryOptions] = useState(null)
    const [warehouseOptions, setWarehouseOptions] = useState(null)
    // use useEffect to load item detail from API 
    useEffect(() => {
        fetchInventoryById(id).then(data => setItemDetails(data.data))
        // retrieve all categories
        getCategories().then(data => setCategoryOptions(data.data));
        // retrieve all warehouse
        getWarehouses().then(data => setWarehouseOptions(data))
    }, [id]);

    // extract last path in URL to decide whether it's edit or add item
    // split path into parts, separated by /
    const pathname = window.location.pathname;
    const urlParts = pathname.split('/')
    const currentPath = urlParts[urlParts.length - 1]

    const handleCategorySelect = (value) => {
        console.log(value)
    }

    const handleWarehouseSelect = (value) => {
        console.log(value)
    }
    // renter CTA and select matching REST action 
    if (itemDetails === null) return null;

    return (
        <div className={`inventory-${currentPath}`}>
            <h2>
                {currentPath} inventory item
            </h2>
            <div className='form-container'>
                <ItemDetailsInput
                    namePlaceHolder={itemDetails.item_name}
                    descPlaceHolder={itemDetails.description}
                    categories={categoryOptions}
                    onCategorySelected={handleCategorySelect} />
                <ItemAvailabilityInput
                    warehouses={warehouseOptions}
                    handleWarehouseSelect={handleWarehouseSelect} />
            </div>

        </div>
    )
}