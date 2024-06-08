import qs from "qs"
import { API_KEY, BASE_URL } from "../config/apiConfig"
import axios from 'axios'

export async function getShows(typeOfShow, keyword) {

    // typeOfShow: tv/movie...
    // keyword: popular, top-rated...

    // try {
    //     const response = await axios.get(`${BASE_URL}${typeOfShow}/${keyword}?api_key=${API_KEY}`);
    //     console.log('Data from API:', response.data);
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }

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

    // typeOfShow: tv/movie...
    // keyword: popular, top-rated...

    // try {
    //     const response = await axios.get(`${BASE_URL}${typeOfShow}/${keyword}?api_key=${API_KEY}`);
    //     console.log('Data from API:', response.data);
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }

    try {
        const response = await axios.get(`${BASE_URL}${typeOfShow}/search${keyword}`, {
            params: {
                q: keyword,
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
