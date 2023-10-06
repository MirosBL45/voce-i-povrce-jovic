// react stuff
import { Link, NavLink } from 'react-router-dom';

// images and icons
import Logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';

// links from data file
import { links } from '../../assets/data/data';

// style
import './navbar.css';
import { useState } from 'react';

function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        {/* logo */}
        <Link to={'/'} className="logo">
          <img src={Logo} alt="voće i povrće početna" />
        </Link>
        {/* links */}
        <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'active-nav' : '')}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* toggle button for mobile */}
        <button
          onClick={() => setIsNavShowing(!isNavShowing)}
          className="nav__toggle-btn"
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
