import React from "react";
import { footerLinks } from "./helper";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="border-top border-white">
      <nav className="flex-1 py-2">
        <ul className="list-unstyled d-flex mb-0 w-100">
          {footerLinks.map((link) => (
            <li
              key={link.to}
              className="px-1 d-flex flex-1 justify-content-center"
            >
              <NavLink
                to={link.to}
                end={true}
                className={({ isActive, isPending }) =>
                  `${
                    isPending ? "pending" : isActive ? "active" : "link-nav"
                  } d-flex flex-column justify-content-center align-items-center text-decoration-none mb-1`
                }
                title={link.label}
              >
                <span>{link.icon}</span>
                <small>{link.label}</small>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
