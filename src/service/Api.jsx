import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

export const getItems = async (endpoint) => {
    try {
    const respone = await axios.get(`${baseUrl}/${endpoint}`);
    return respone.data
    } catch (error) {
        console.log("error fetching items: ", error)
        throw error;
    }
}