import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { userFormConfig } from "./helper";
import DynamicInput from "../forms/DynamicInput";
import { USER } from "../../typescript/users";
import {
  addDoc,
  //  updateDoc
} from "firebase/firestore";
import { userCollectionRef } from "../../lib/firebase/firestore.collections";

interface UserFormProps {
  id?: string;
}

const UserForm = ({ id }: UserFormProps) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<USER["data"]>();

  const handleOnSubmit = (data: USER["data"]): void => {
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
    <form
      className="px-2 bg-dark rounded border m-1 text-white"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <h3>{id ? "Edit user" : "Add user"}</h3>
      {userFormConfig.map((input) => {
        return (
          <DynamicInput
            key={input.name}
            data={input}
            register={register}
            control={control}
            errors={errors}
          />
        );
      })}
      <div className="py-2">
        <button type="submit" className="btn btn-primary btn-sm me-1">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
