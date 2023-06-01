import SelectUser from "./inputs/SelectUser";
import WrapperInput from "./layout/WrapperInput";
import { INPUT_DATA, INPUT_ENUM } from "./typescript";

interface DynamicInputProps {
  data: INPUT_DATA;
  register: any;
  control: any;
  errors: any;
}

const { SELECT_USER } = INPUT_ENUM;

const DynamicInput = ({ data, register, errors }: DynamicInputProps) => {
  const { type, registerParams } = data;
  
  switch (type) {
    case SELECT_USER:
      return (
        <WrapperInput label={data.label} htmlFor={data.name} errors={errors}>
          <SelectUser />
        </WrapperInput>
      );

    default:
      return (
        <WrapperInput label={data.label} htmlFor={data.name} errors={errors}>
          <input
            className="form-control"
            {...data}
            {...register(data.name, {
              ...registerParams,
              required: data.required,
            })}
            style={{
              border: errors[data.name] ? `1px solid red` : undefined,
            }}
          />
        </WrapperInput>
      );
  }
};

export default DynamicInput;
