import React from "react";

import { NavLink } from "react-router-dom";
import { navLinks } from "./helper";

const Navigation = () => {
  return (
    <ul className="list-unstyled d-flex">
      {navLinks.map((link) => (
        <li key={link.to} className="px-1">
          <NavLink to={link.to}>
            {link.icon} - {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
