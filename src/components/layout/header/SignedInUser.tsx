import React from "react";
import { observer } from "mobx-react";

import authUserStore from "../../../store/AuthUser";
import ProfilePic from "../../users/ProfilePic";
import { Link } from "react-router-dom";

const SignedInUser = observer(() =>
  authUserStore.user ? (
    <Link
      to={`/users/user/${authUserStore.user?.id}`}
      className="d-flex align-items-center text-decoration-none"
    >
      <ProfilePic size={24} iconStyle="bg-success" wrapperStyle="me-1" />
      <p className="fw-bold text-white">{authUserStore.user?.userName}</p>
    </Link>
  ) : (
    <>Not signed in</>
  )
);

export default SignedInUser;
