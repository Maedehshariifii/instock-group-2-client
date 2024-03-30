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
        return data.data.map(warehouse => warehouse.warehouse_name)
    } catch (error) {
        console.error("Error fetching Warehouse data:", error);
    }
};