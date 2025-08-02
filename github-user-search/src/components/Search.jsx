import React, { useState } from 'react';
import { searchGitHubUsers } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
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
            const data = await searchGitHubUsers(username.trim());
            setUsers(data);
        } catch (err) {
            setError("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search GitHub users"
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



