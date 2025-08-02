import axios from 'axios';

// Search for multiple users
export const searchGitHubUsers = async (query) => {
    const endpoint = `https://api.github.com/search/users?q=${query}`;
    const response = await axios.get(endpoint);
    return response.data.items;
};

// (Optional: Keep single user fetch)
export const fetchUserData = async (username) => {
    const endpoint = `https://api.github.com/users/${username}`;
    const response = await axios.get(endpoint);
    return response.data;
};

