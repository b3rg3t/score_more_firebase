import React from "react";
import { ERROR_TYPE } from "../api/typescript";

interface ErrorHandlerProps {
  isError: ERROR_TYPE;
}

const ErrorHandler = ({ isError }: ErrorHandlerProps) => {
  return (
    <div>
      {`errorMessage: ${isError.message}`}
      {`errorStatus: ${isError.status}`}
    </div>
  );
};

export default ErrorHandler;
