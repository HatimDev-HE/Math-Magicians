import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="header-head">Math Magicians</h1>
    <nav className="navbar">
      <li key={1} className="li">
        <NavLink to="/">Home</NavLink>
      </li>
      <li key={2} className="li">
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li key={3} className="li">
        <NavLink to="/quote">Quote</NavLink>
      </li>
    </nav>
  </header>
);

export default Header;
