import React from "react";
import LoadingSpinner from "../../utils/LoadingSpinner";
import ErrorHandler from "../../utils/ErrorHandler";
import { ERROR_TYPE } from "../../api/types";

interface FetchHandlerProps {
  isError?: ERROR_TYPE;
  isLoading?: boolean;
  children?: React.ReactElement;
}

const FetchHandler = ({ isError, isLoading, children }: FetchHandlerProps) => {
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (isError?.message && isError?.status) {
    return <ErrorHandler isError={isError} />;
  } else if (children) {
    return <>{children}</>;
  } else {
    return <></>;
  }
};

export default FetchHandler;
