import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchUserData = async (username, location = '', minRepos = 0) => {
    let query = `https://api.github.com/search/users?q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos > 0) query += `+repos:>${minRepos}`;

    const headers = {
        Authorization: `token ${GITHUB_TOKEN}`,
    };

    const response = await axios.get(query, { headers });
    return response.data.items;
};



