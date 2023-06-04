import React from "react";
import InputError from "./InputError";
import { INPUT_DATA } from "../types";

interface WrapperInputProps {
  children: React.ReactElement;
  label: string;
  htmlFor: string;
  required: INPUT_DATA["required"];
  errors: any;
}

const WrapperInput = ({
  children,
  label,
  htmlFor,
  required,
  errors,
}: WrapperInputProps) => {
  return (
    <div className="flex-1 mb-1">
      <label className="w-100 fw-normal" htmlFor={htmlFor}>
        {required ? `${label} *` : label}
        {children}
      </label>
      {errors[htmlFor] && <InputError />}
    </div>
  );
};

export default WrapperInput;
