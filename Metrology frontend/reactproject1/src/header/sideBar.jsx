import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ background: '#1e293b', padding: '1rem', display: 'flex', gap: '2rem' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Главная</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>О сервисе</Link>
    </nav>
  );
}

export default NavBar;