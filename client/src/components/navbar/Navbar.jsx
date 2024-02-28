import { Link } from 'react-router-dom';
import './navbar.styles.css'

function Navbar() {
    return (
      <div className="navbar">
        <Link to="/home">HOME</Link>
        <Link to="/create">CREATE</Link>
        <form>
          <input placeholder="Buscar"/>
          <button>Buscar</button>
        </form>
      </div>
    );
  }
  
  export default Navbar;