import { observer } from "mobx-react";

import DynamicForm from "../../forms/DynamicForm";
import { userFormConfig } from "./helper";

import authUserStore from "../../../store/AuthUser";
import { AuthUserType } from "../../../store/types";
import { useNavigate } from "react-router-dom";

const UserSingInForm = observer(() => {
  const navigate = useNavigate()
  const handleSubmit = (data: AuthUserType) => {
    authUserStore.setAuthUser(data);
    navigate(-1)
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
