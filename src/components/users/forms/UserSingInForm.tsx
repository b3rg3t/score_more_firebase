import { observer } from "mobx-react";

import DynamicForm from "../../forms/DynamicForm";
import { userFormConfig } from "./helper";

import authUserStore from "../../../store/AuthUser";
import { AuthUserType } from "../../../store/types";

const UserSingInForm = observer(() => {
  const handleSubmit = (data: AuthUserType) => {
    authUserStore.setAuthUser(data);
  };

  return (
    <DynamicForm
      title="Edit mobX"
      inputs={userFormConfig}
      defaultValues={authUserStore.user}
      callBackFunc={handleSubmit}
    />
  );
});

export default UserSingInForm;
