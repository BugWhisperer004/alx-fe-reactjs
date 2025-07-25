import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            padding: '10px',
            backgroundColor: '#eee',
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;

