import React from "react";
import InputError from "./InputError";

interface WrapperInputProps {
  children: React.ReactElement;
  label: string;
  htmlFor: string;
  errors: any;
}

const WrapperInput = ({
  children,
  label,
  htmlFor,
  errors,
}: WrapperInputProps) => {
  return (
    <div className="flex-1 mb-1">
      <label className="w-100 fw-normal" htmlFor={htmlFor}>
        {label}
        {children}
      </label>
      {errors[htmlFor] && <InputError />}
    </div>
  );
};

export default WrapperInput;
