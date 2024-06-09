import qs from "qs";
import { API_KEY, BASE_URL } from "../config/apiConfig";
import axios from 'axios';

export async function getShows(typeOfShow, keyword) {
    try {
        const response = await axios.get(`${BASE_URL}${typeOfShow}/${keyword}`, {
            params: {
                api_key: API_KEY
            },
            paramsSerializer: params => qs.stringify(params)
        });
        console.log(`URL: ${BASE_URL}${typeOfShow}/${keyword}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function searchShows(typeOfShow, keyword) {
    try {
        const response = await axios.get(`${BASE_URL}search/${typeOfShow}?`, {
            params: {
                query: encodeURIComponent(keyword),
                api_key: API_KEY
            },
            paramsSerializer: params => qs.stringify(params)
        });
        console.log(`URL: ${BASE_URL}search/${typeOfShow}?query=${keyword}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
