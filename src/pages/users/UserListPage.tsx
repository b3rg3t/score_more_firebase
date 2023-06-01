import React from "react";

import RealtimeUserList from "../../components/users/RealtimeUserList";
import WrapperPage from "../../components/layout/general/WrapperPage";

const UserListPage = () => (
  <WrapperPage id="user-list" className="overflow-auto">
    <RealtimeUserList />
  </WrapperPage>
);

export default UserListPage;
