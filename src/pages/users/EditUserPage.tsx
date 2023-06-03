import { useParams } from "react-router-dom";
import UserForm from "../../components/users/forms/UserForm";
import WrapperPage from "../../components/layout/general/WrapperPage";

const EditUserPage = () => {
  let { userId } = useParams();

  return (
    <WrapperPage id="edit-user-form">
      <UserForm id={userId ? userId : ""} />
    </WrapperPage>
  );
};

export default EditUserPage;
