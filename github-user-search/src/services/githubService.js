import axios from 'axios';

export const searchGitHubUsers = async (query, location, minRepos) => {
    let fullQuery = `${query}`;
    if (location) fullQuery += `+location:${location}`;
    if (minRepos) fullQuery += `+repos:>=${minRepos}`;

    const endpoint = `https://api.github.com/search/users?q=${fullQuery}`;
    const response = await axios.get(endpoint);
    return response.data.items;
};
