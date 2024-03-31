import axios from "axios";
const baseUrl = process.env.baseUrl || 'http://localhost:8080/api/';

export async function fetchInventoryById(id) {
    try {
        const data = await axios.get(`${baseUrl}inventories/${id}`);
        return data;
    } catch (error) {
        console.error("Error fetching inventory item details:", error);
    }
};

export async function getCategories() {
    try {
        const data = await axios.get(`${baseUrl}inventories/categories`)
        return data;
    } catch (error) {
        console.error("Error fetching inventory item details:", error);
    }
};

export async function getWarehouses() {
    try {
        const data = await axios.get(`${baseUrl}warehouses`);
        return data.data.map(({ warehouse_name, id }) => ({ warehouse_name, id }))
    } catch (error) {
        console.error("Error fetching Warehouse data:", error);
    }
};

export async function getWarehouseIdByName(name) {
    try {
        const data = await axios.get(`${baseUrl}warehouses`);
        const warehouses = data.data
        const warehouse = warehouses.find(warehouse => warehouse.warehouse_name === name)
        return warehouse.id;
    } catch (error) {
        console.error("Error fetching Warehouse data:", error);
    }
};

export async function updateItem(id, newItemDetails) {
    try {
        const response = await axios.put(`${baseUrl}inventories/${id}`, newItemDetails);
        console.log('Item updated successfully:', response.data)
    } catch (error) {
        console.error("Error updating item:", error);
    }
};

export async function getWarehouseById(id) {
    try {

        const data = await axios.get(`${baseUrl}warehouses/${id}`);
        return data.data;
    } catch (error) {
        console.error("Error fetching Warehouse data:", error);
    }
};

export async function updateWarehouse(id, newWarehouseDetails) {
    try {
        const response = await axios.put(`${baseUrl}warehouses/${id}`, newWarehouseDetails);
        console.log('Warehouse updated successfully:', response.data)
    } catch (error) {
        console.error("Error updating warehouse:", error);
    }
};

export async function deleteInventoryItem(id) {
    try {
        await axios.delete(`${baseUrl}inventories/${id}`);
        console.log('Item deleted successfully:')
    } catch (error) {
        console.error("Error deleting warehouse:", error);
    }
}