import React from "react";

import SignedInUser from "./SignedInUser";
import { Link } from "react-router-dom";

const Header = () => (
  <header
    id="header"
    className="border-bottom border-white box-shadow d-flex align-items-center px-1"
  >
    <SignedInUser />
    <Link to="/edit">Edit user</Link>
  </header>
);

export default Header;
