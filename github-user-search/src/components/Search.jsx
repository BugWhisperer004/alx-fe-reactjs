// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError('');
        setUsers([]);

        try {
            const data = await fetchUserData(username.trim(), location.trim(), parseInt(minRepos));
            setUsers(data);
        } catch (err) {
            setError("Looks like we can't find any matching users.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: '0.5rem', width: '200px', marginRight: '0.5rem' }}
                />
                <input
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    style={{ padding: '0.5rem', width: '150px', marginRight: '0.5rem' }}
                />
                <input
                    type="number"
                    placeholder="Min Repos"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    style={{ padding: '0.5rem', width: '100px', marginRight: '0.5rem' }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem', gap: '1rem' }}>
                {users.map((user) => (
                    <div key={user.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '10px', width: '250px' }}>
                        <img src={user.avatar_url} alt={user.login} width="100" style={{ borderRadius: '50%' }} />
                        <h3>{user.login}</h3>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;




