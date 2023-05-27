import React from "react";

import { NavLink } from "react-router-dom";
import { navLinks } from "./helper";

const Header = () => {
  return (
    <nav id="header" className="border-bottom border-white">
      <ul className="list-unstyled d-flex flex-1 mb-0 w-100">
        {navLinks.map((link) => (
          <li key={link.to} className="px-1 ">
            <NavLink
              to={link.to}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "link-nav"
              }
              title={link.label}
            >
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
