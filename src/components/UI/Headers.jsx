import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          {/* Logo */}
          <div className="logo">
            <NavLink to="/">
              <h4 style={{ color: "white" }}>CANCER HELPLINE: 1800-22-1951</h4>
            </NavLink>
          </div>

          {/* Navigation */}
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          {/* Hamburger Menu */}
          <div className="ham-menu">
            <button onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
