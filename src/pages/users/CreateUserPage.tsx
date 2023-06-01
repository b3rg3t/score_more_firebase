import { useParams } from "react-router-dom";

import WrapperPage from "../../components/layout/general/WrapperPage";
import UserForm from "../../components/users/forms/UserForm";

const CreateUserPage = () => {
  let { userId } = useParams();
  return (
    <WrapperPage id="create-user-form">
      <UserForm id={userId ? userId : ""} />
    </WrapperPage>
  );
};

export default CreateUserPage;
