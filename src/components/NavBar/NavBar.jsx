import './NavBar.css'
import { useNavigate } from 'react-router';

function NavBar({ setSearchQuery }) {
  const navigate = useNavigate();
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={() => navigate("/")}>
        <h1>Relatos<br />de Papel</h1>
      </div>
      <div className="navbar__search">
        <input
          type="text"
          className="navbar__search-input"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <button className="navbar__search-button">🔍</button>
      </div>
      <div className="navbar__links">
        <a className="navbar__link">Home</a>
        <a className="navbar__link">Deals</a>
        <a className="navbar__link">Cart</a>
      </div>
      <div className="navbar__sign">
        <button className="navbar__signup-Sign-in">Sign in</button>
        <button className="navbar__signup-Sign-Up">Sign Up</button>
      </div>
    </nav>
  );
}

export default NavBar
