import { useNavigate } from "react-router-dom";
import DynamicForm from "../../forms/DynamicForm";
import { USER } from "../../../typescript/users";
import {
  addDoc,
  //  updateDoc
} from "firebase/firestore";
import { userCollectionRef } from "../../../lib/firebase/firestore.collections";
import { userFormConfig } from "./helper";

interface UserFormProps {
  id?: string;
}
const UserForm = ({ id }: UserFormProps) => {
  const navigate = useNavigate();

  const handleSubmit = (data: USER["data"]) => {
    if (id) {
      //   updateDoc(userCollectionRef, {
      //     firstName: data.firstName,
      //     lastName: data.lastName,
      //     userName: data.userName,
      //   }).then((response) => {
      //   console.log(response.id);
      //   navigate(`/users`);
      // })
      // .catch((error) => console.log(error));;
    } else {
      addDoc(userCollectionRef, {
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
      })
        .then((response) => {
          console.log(response.id);
          navigate(`/users`);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <DynamicForm
      title={id ? `Edit user` : "Create user"}
      inputs={userFormConfig}
      callBackFunc={handleSubmit}
    />
  );
};

export default UserForm;
