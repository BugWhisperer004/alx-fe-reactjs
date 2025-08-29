import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

export default function Profile() {
    const { user, logout } = useAuth();

    return (
        <div>
            <h2>Profile: {user?.name}</h2>

            <nav style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <NavLink to="">Details</NavLink>
                <NavLink to="settings">Settings</NavLink>
                <button onClick={logout}>Logout</button>
            </nav>

            {/* Nested routes explicitly declared here */}
            <Routes>
                <Route index element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
}

