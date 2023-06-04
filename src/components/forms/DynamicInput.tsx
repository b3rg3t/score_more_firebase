import CreatableSelectPlayers from "./inputs/CreatableSelectPlayers";
import WrapperInput from "./layout/WrapperInput";
import { INPUT_DATA, INPUT_ENUM } from "./types";

export interface DynamicInputProps {
  input: INPUT_DATA;
  register: any;
  control: any;
  errors: any;
}

const { SELECT_PLAYERS } = INPUT_ENUM;

const DynamicInput = (props: DynamicInputProps) => {
  const { input, register, errors } = props;

  const { type, registerParams } = input;

  switch (type) {
    case SELECT_PLAYERS:
      return (
        <WrapperInput
          label={input.label}
          htmlFor={input.name}
          required={input.required}
          errors={errors}
        >
          <CreatableSelectPlayers {...props} />
        </WrapperInput>
      );

    default:
      return (
        <WrapperInput
          label={input.label}
          htmlFor={input.name}
          required={input.required}
          errors={errors}
        >
          <input
            className="form-control"
            {...input}
            {...register(input.name, {
              ...registerParams,
              required: input.required,
            })}
            style={{
              border: errors[input.name] ? `1px solid red` : undefined,
            }}
          />
        </WrapperInput>
      );
  }
};

export default DynamicInput;
