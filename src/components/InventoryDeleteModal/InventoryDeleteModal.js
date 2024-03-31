import CtaGroup from '../CtaGroup/CtaGroup';
import { fetchInventoryById, deleteInventoryItem } from '../../utils/helper'
import { useEffect, useState } from 'react';
import './_InventoryDeleteModal.scss';

export default function InventoryDeleteModal({ onClose, id }) {
    const [itemDetails, setItemDetails] = useState(null)

    // use useEffect to load item detail from API 
    useEffect(() => {
        fetchInventoryById(id).then(data => setItemDetails(data.data))
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        deleteInventoryItem(id)
        onClose();
    };

    if (!itemDetails || Object.entries(itemDetails).length === 0) return (<div>Loading...</div>)

    return (
        <div>
            <div className="inventory-delete-modal-overlay">
                <div className="content">
                    <h1>{`Delete ${itemDetails.item_name} inventory item?`}</h1>
                    <p>
                        {`Please confirm that you'd like to delete ${itemDetails.item_name} from the inventory list. You won't be able to undo this action`}
                    </p>
                    <CtaGroup
                        onClose={onClose}
                        isModal={true}
                        actionName='Delete'
                        handleFormSubmit={handleFormSubmit}
                        navigateTo='/inventory'
                    />
                </div>
            </div>
        </div>
    )
}