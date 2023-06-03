import { useNavigate } from "react-router-dom";
import DynamicForm from "../../forms/DynamicForm";
import { USER } from "../../../typescript/users";
import { addDoc, updateDoc, doc } from "firebase/firestore";
import { userCollectionRef } from "../../../lib/firebase/firestore.collections";
import { userFormConfig } from "./helper";
import useApiHook from "../../api/useApiHook";
import { FETCH_FUNCTIONS } from "../../api/types";
import FetchHandler from "../../layout/general/FetchHandler";
import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase/init-firebase";
import { FirebaseTypes } from "../../../lib/firebase/typescript";

const { GET_USER } = FETCH_FUNCTIONS;
const { USERS } = FirebaseTypes;

interface UserFormProps {
  id?: string;
}
const UserForm = ({ id }: UserFormProps) => {
  const [{ data, isError, isLoading }] = useApiHook(GET_USER, id);
  const [defaultValues, setDefaultValues] = useState<USER["data"] | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (data: USER["data"]) => {
    if (id) {
      const userRef = doc(db, USERS, id);
      updateDoc(userRef, {
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
      })
        .then(() => {
          navigate(-1);
        })
        .catch((error) => console.log(error));
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

  useEffect(() => {
    if (data) {
      setDefaultValues(data);
    }
  }, [data]);

  if (id) {
    return (
      <FetchHandler isError={isError} isLoading={isLoading} data={data}>
        <>
          {defaultValues ? (
            <DynamicForm
              title={id ? `Edit user` : "Create user"}
              inputs={userFormConfig}
              defaultValues={defaultValues ? defaultValues : undefined}
              callBackFunc={handleSubmit}
            />
          ) : (
            ""
          )}
        </>
      </FetchHandler>
    );
  }
  return (
    <DynamicForm
      title={id ? `Edit user` : "Create user"}
      inputs={userFormConfig}
      callBackFunc={handleSubmit}
    />
  );
};

export default UserForm;
