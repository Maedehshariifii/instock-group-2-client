import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getWarehouseById, updateWarehouse } from '../../utils/helper'
import CtaGroup from '../CtaGroup/CtaGroup';
import WarehouseDetails from './WarehouseDetails/WarehouseDetails';
import ContactDetails from './ContactDetails/ContactDetails';
import './_WarehouseInput.scss'

export default function WarehouseInput() {
    // extract warehouse id
    const { id } = useParams();

    // use useState to store warehouseDetails
    const [warehouseDetails, setWarehouseDetails] = useState(null)
    const [formData, setFormData] = useState({});

    // use useEffect to load warehouseDetails from API
    useEffect(() => {
        getWarehouseById(id).then(data => setWarehouseDetails(data))
    }, [id]);

    useEffect(() => {

        setFormData({
            warehouse_name: warehouseDetails?.warehouse_name,
            address: warehouseDetails?.address,
            city: warehouseDetails?.city,
            country: warehouseDetails?.country,
            contact_name: warehouseDetails?.contact_name,
            contact_position: warehouseDetails?.contact_position,
            contact_phone: warehouseDetails?.contact_phone,
            contact_email: warehouseDetails?.contact_email
        })
    }, [warehouseDetails])

    const handleFormChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(formData)
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        updateWarehouse(id, formData)
    };
    return (
        <div className='warehouse-edit'>
            <h2>
                edit warehouse
            </h2>
            <div className='warehouse-edit__form-container'>
                <WarehouseDetails
                    warehouseDetails={warehouseDetails}
                    handleFormChange={handleFormChange}
                    formData={formData} />
                <hr className='warehouse-edit__divider'></hr>
                <ContactDetails
                    warehouseDetails={warehouseDetails}
                    handleFormChange={handleFormChange}
                    formData={formData} />
            </div>
            <CtaGroup
                actionName='edit'
                handleFormSubmit={handleFormSubmit}
                navigateTo='/warehouses' />

        </div>
    )
}