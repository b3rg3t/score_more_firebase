import React from "react";
import WrapperInput from "./layout/WrapperInput";
import { INPUT_DATA } from "./typescript";

interface DynamicInputProps {
  data: INPUT_DATA;
  register: any;
  control: any;
  errors: any;
}

const DynamicInput = ({ data, register }: DynamicInputProps) => {
  return (
    <WrapperInput label={data.label} htmlFor={data.name}>
      <input className="form-control" {...data} {...register(data.name)} />
    </WrapperInput>
  );
};

export default DynamicInput;
