import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError('');
        setUser(null);

        try {
            const data = await fetchUserData(username.trim());
            setUser(data);
        } catch (err) {
            setError('Looks like we can’t find the user');
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
                    style={{ padding: '0.5rem', width: '250px' }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user && (
                <div style={{ marginTop: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '10px' }}>
                    <img src={user.avatar_url} alt={user.login} width="100" style={{ borderRadius: '50%' }} />
                    <h2>{user.name || 'No name provided'}</h2>
                    <p><strong>Username:</strong> {user.login}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default Search;
