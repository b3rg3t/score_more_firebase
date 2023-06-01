import React from "react";
import { ERROR_TYPE } from "../api/types";
import { formatDate } from "./helperFunctions";
import WrapperHeader from "../layout/general/WrapperHeader";
interface ErrorHandlerProps {
  isError: ERROR_TYPE;
}

export const initialError: ERROR_TYPE = {
  message: "",
  status: 0,
};

const ErrorHandler = ({ isError }: ErrorHandlerProps) => {
  if (isError) {
    const time = formatDate({ date: new Date(), withTime: true });
    return (
      <section className="w-100 position-relative">
        <div className="error-bg rounded text-danger d-flex flex-column m-1 p-2">
          <WrapperHeader
            title="Error"
            className="border-bottom border-danger"
          />
          <p>
            <b>Time of error: </b> {time}
          </p>
          <p>
            <b>Status: </b> {isError.status}
          </p>
          <p>
            <b>Message: </b> {isError.message}
          </p>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default ErrorHandler;
