import React from "react";
import { footerLinks } from "./helper";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <nav id="footer" className="border-top border-white">
      <ul className="list-unstyled d-flex mb-0 w-100">
        {footerLinks.map((link) => (
          <li
            key={link.to}
            className="px-1 d-flex flex-1 justify-content-center"
          >
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

export default Footer;
