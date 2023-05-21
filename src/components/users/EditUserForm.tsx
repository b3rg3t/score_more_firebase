import React from "react";

import { useForm } from "react-hook-form";
import { USER } from "../../typescript/users";
import DynamicInput from "../forms/DynamicInput";
import { UserForm } from "./helper";
import { useNavigate } from "react-router-dom";

interface EditUserFormProps {
  id: string;
}

const EditUserForm = ({ id }: EditUserFormProps) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<USER["data"]>();

  const handleOnSubmit = (data: USER["data"]): void => {};

  return (
    <form className="px-2 bg-info" onSubmit={handleSubmit(handleOnSubmit)}>
      <h3>Edit user</h3>
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

export default EditUserForm;
