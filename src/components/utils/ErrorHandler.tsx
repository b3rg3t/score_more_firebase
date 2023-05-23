import React from "react";
import { ERROR_TYPE } from "../api/types";

interface ErrorHandlerProps {
  isError: ERROR_TYPE;
}

export const initialError: ERROR_TYPE = {
  message: "",
  status: 0,
};

const ErrorHandler = ({ isError }: ErrorHandlerProps) => {
  if (isError) {
    return (
      <div>
        {`errorMessage: ${isError.message}`}
        {`errorStatus: ${isError.status}`}
      </div>
    );
  } else {
    return <></>;
  }
};

export default ErrorHandler;
