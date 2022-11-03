import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="top-section">
    <h1>Math Magicians</h1>
    <nav>
      <NavLink
        to="/"
        className="link"
      >
        Home
      </NavLink>
      <NavLink className="link" to="/calculator">Calculator</NavLink>
      <NavLink className="link" to="/quote">Quote</NavLink>
    </nav>
  </header>
);

export default NavBar;
