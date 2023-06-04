import React from "react";

import SignedInUser from "./SignedInUser";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import PlayerActiveGame from "./PlayerActiveGame";

const Header = () => (
  <header
    id="header"
    className="border-bottom border-white box-shadow d-flex align-items-center px-1"
  >
    <SignedInUser />
    <Link to="/edit" className="btn btn-dark btn-sm pt-0 ms-1">
      <FaEdit />
    </Link>
    <PlayerActiveGame />
  </header>
);

export default Header;
