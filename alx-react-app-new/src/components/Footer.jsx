function Footer() {
    return (
        <footer style={{ backgroundColor: '#222', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
            <p>&copy; {new Date().getFullYear()} 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;
