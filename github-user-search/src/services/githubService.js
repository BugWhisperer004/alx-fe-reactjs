import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = 0) => {
    let query = `https://api.github.com/search/users?q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos > 0) query += `+repos:>${minRepos}`;

    const response = await axios.get(query);
    return response.data.items; // GitHub returns `items` array for search API
};


