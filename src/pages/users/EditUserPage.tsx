import { useParams } from "react-router-dom";
import UserForm from "../../components/users/UserForm";

const EditUserPage = () => {
  let { userId } = useParams();

  return (
    <div>
      <UserForm id={userId ? userId : ""} />
    </div>
  );
};

export default EditUserPage;
