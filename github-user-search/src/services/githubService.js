import axios from 'axios';

export const searchGitHubUsers = async (username, location, minRepos) => {
    let query = username;

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const endpoint = `https://api.github.com/search/users?q=${query}`;
    const response = await axios.get(endpoint);
    return response.data.items;
};

