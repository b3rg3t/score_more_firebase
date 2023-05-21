import React from "react";

import { NavLink } from "react-router-dom";
import { navLinks } from "./helper";

const Navigation = () => {
  return (
    <ul className="list-unstyled d-flex bg-dark border-bottom border-white mb-0">
      {navLinks.map((link) => (
        <li key={link.to} className="px-1 ">
          <NavLink to={link.to}>
            <span className="text-white text-decoration-underline">
              {link.icon} - {link.label}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
