import React from "react";

import SignedInUser from "./SignedInUser";

const Header = () => (
  <header
    id="header"
    className="border-bottom border-white box-shadow d-flex align-items-center px-1"
  >
    <SignedInUser />
  </header>
);

export default Header;
