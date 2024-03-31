import { useParams } from 'react-router-dom'
import ItemAvailabilityInput from './ItemAvailabilityInput/ItemAvailabilityInput'
import ItemDetailsInput from './ItemDetailsInput/ItemDetailsInput'
import './_InventoryItemInput.scss'
import { useEffect, useState } from 'react';
import { fetchInventoryById, getWarehouseIdByName, updateItem } from '../../utils/helper'
import CtaGroup from '../CtaGroup/CtaGroup';

export default function InventoryItemInput(props) {
    // extract inventory id from
    const { id } = useParams();

    // use useState to store item detail and set new detail
    const [itemDetails, setItemDetails] = useState(null)
    const [formData, setFormData] = useState({});
    const [warehouseId, setWarehouseId] = useState(null);


    // use useEffect to load item detail from API 
    useEffect(() => {
        fetchInventoryById(id).then(data => setItemDetails(data.data))
    }, [id]);

    useEffect(() => {

        setFormData({
            warehouse_name: itemDetails?.warehouse_name,
            item_name: itemDetails?.item_name,
            description: itemDetails?.description,
            category: itemDetails?.category,
            status: itemDetails?.status,
            quantity: itemDetails?.quantity
        })


    }, [itemDetails])

    const handleFormChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const itemDetailsToUpdate = formData;

        // add warehouse_id:
        getWarehouseIdByName(formData.warehouse_name).then(data => setWarehouseId(data))
        console.log('warehouseId', warehouseId)
        itemDetailsToUpdate.warehouse_id = warehouseId;

        // // remove warehouse_name
        delete itemDetailsToUpdate.warehouse_name;

        // replace 0/zero quantity in case out-of-stock
        itemDetailsToUpdate.quantity = itemDetailsToUpdate.status === 'Out of Stock' ? 0 : itemDetailsToUpdate.quantity

        updateItem(id, itemDetailsToUpdate)

    };

    return (
        <div className='inventory-edit'>
            <h2>
                edit inventory item
            </h2>
            <div className='inventory-edit__form-container'>
                <ItemDetailsInput
                    itemDetails={itemDetails}
                    formData={formData}
                    handleFormChange={handleFormChange} />
                <hr className='inventory-edit__divider'></hr>
                <ItemAvailabilityInput
                    formData={formData}
                    handleFormChange={handleFormChange}
                    itemDetails={itemDetails} />
            </div>
            <CtaGroup actionName='edit' handleFormSubmit={handleFormSubmit} />

        </div>
    )
}