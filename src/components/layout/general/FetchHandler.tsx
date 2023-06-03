import React from "react";
import LoadingSpinner from "../../utils/LoadingSpinner";
import ErrorHandler from "../../utils/ErrorHandler";
import { ERROR_TYPE } from "../../api/types";

interface FetchHandlerProps {
  isError?: ERROR_TYPE;
  isLoading?: boolean;
  data?: any;
  children?: React.ReactElement;
}

const FetchHandler = ({ isError, isLoading, data, children }: FetchHandlerProps) => {
  if (isLoading) {
    return (
      <div className="w-100 d-flex justify-content-center align-items-center">
        <LoadingSpinner />
      </div>
    );
  } else if (isError?.message && isError?.status) {
    return <ErrorHandler isError={isError} />;
  } else if (children && data) {
    return <>{children}</>;
  } else {
    return <></>;
  }
};

export default FetchHandler;
