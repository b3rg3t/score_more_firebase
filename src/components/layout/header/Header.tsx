import React from "react";

import SignInUser from "./SignInUser";

const Header = () => (
  <header
    id="header"
    className="border-bottom border-white box-shadow d-flex align-items-center px-1"
  >
    <SignInUser />
  </header>
);

export default Header;
