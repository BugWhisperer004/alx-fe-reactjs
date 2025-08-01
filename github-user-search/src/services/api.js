// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUser = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
