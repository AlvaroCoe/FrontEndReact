import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <h2>Contabilidade<span>Online</span></h2>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/produtos" className="nav-link">Produtos</Link>
        <Link to="/servicos" className="nav-link">Serviços</Link>
        <Link to="/sobre" className="nav-link">Sobre Nós</Link>
      </nav>
    </header>
  );
}

export default Header;