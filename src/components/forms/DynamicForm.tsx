import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import WrapperHeader from "../layout/general/WrapperHeader";
import DynamicInput from "./DynamicInput";

interface DynamicFormProps {
  title: string;
  inputs?: [];
  callBackFunc?: (data: any) => void;
}

const DynamicForm = ({ title, inputs, callBackFunc }: DynamicFormProps) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitCallback = (data: any) => {
    callBackFunc && callBackFunc(data);
  };

  return (
    <form
      className="px-2 bg-dark rounded border m-1 text-white"
      onSubmit={handleSubmit(onSubmitCallback)}
    >
      <WrapperHeader title={title} />
      {inputs?.length
        ? inputs.map((input) => {
            return (
              <DynamicInput
                data={input}
                register={register}
                control={control}
                errors={errors}
              />
            );
          })
        : "No form configuration"}
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

export default DynamicForm;
