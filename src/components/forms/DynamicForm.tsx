import { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import WrapperHeader from "../layout/general/WrapperHeader";
import DynamicInput from "./DynamicInput";
import { INPUT_DATA } from "./types";
import OverlayLoading from "./layout/OverlayLoading";

interface DynamicFormProps {
  title: string;
  inputs?: INPUT_DATA[];
  defaultValues?: any;
  submitBtnLabel?: string | React.ReactElement;
  callBackFunc?: (data: any) => void;
}

const DynamicForm = ({
  title,
  inputs,
  defaultValues,
  submitBtnLabel,
  callBackFunc,
}: DynamicFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmitCallback = (data: any) => {
    setIsLoading(true)
    callBackFunc && callBackFunc(data);
  };

  return (
    <form
      className="px-2 bg-dark rounded border text-white flex-1 d-flex flex-column position-relative box-shadow"
      onSubmit={handleSubmit(onSubmitCallback)}
    >
      {isLoading && <OverlayLoading />}
      <WrapperHeader title={title} className="pt-1" />
      {inputs?.length
        ? inputs.map((input) => {
            return (
              <DynamicInput
                key={input.name}
                input={input}
                register={register}
                control={control}
                errors={errors}
              />
            );
          })
        : "No form configuration"}
      <div className="py-2 d-flex justify-content-end">
        <button type="submit" className="btn btn-primary btn-sm me-1">
          {submitBtnLabel ? submitBtnLabel : "Submit"}
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
