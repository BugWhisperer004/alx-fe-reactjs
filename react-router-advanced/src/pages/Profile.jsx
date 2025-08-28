import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

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

            {/* nested route content will render here */}
            <Outlet />
        </div>
    );
}
