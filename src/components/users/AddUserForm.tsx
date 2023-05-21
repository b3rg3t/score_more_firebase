import React from "react";

import { useForm } from "react-hook-form";
import { UserForm } from "./helper";
import DynamicInput from "../forms/DynamicInput";
import { USER } from "../../typescript/users";
import { addDoc } from "firebase/firestore";
import { userCollectionRef } from "../../lib/firebase/firestore.collections";

const AddUserForm = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<USER["data"]>();

  const handleOnSubmit = (data: USER["data"]): void => {
    addDoc(userCollectionRef, {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
    })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="px-2 bg-info" onSubmit={handleSubmit(handleOnSubmit)}>
      <h3>Add user</h3>
      {UserForm.map((input) => {
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
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
