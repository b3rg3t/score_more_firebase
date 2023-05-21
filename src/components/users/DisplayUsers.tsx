import React from "react";

import { USER } from "../../typescript/users";
import { displayFullName } from "./helper";
import useApiHook from "../api/useApiHook";
import { FETCH_FUNCTIONS } from "../api/typescript";
import LoadingSpinner from "../utils/LoadingSpinner";
import ErrorHandler from "../utils/ErrorHandler";

const { GET_ALL_USERS } = FETCH_FUNCTIONS;

const DisplayUsers = () => {
  const [{ isError, isLoading, data }] = useApiHook(GET_ALL_USERS);

  console.log(isError, isLoading, data);

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (isError) {
    return <ErrorHandler isError={isError} />;
  } else if (!data) {
    return <></>;
  }
  return (
    <div className="bg-gradient">
      <h3>Users</h3>
      {data.length > 0 && (
        <ul className="list-unstyled d-flex flex-column justify-content-start">
          {data.map((user: USER) => {
            return (
              <li key={user.id} className="bg-white border">
                {displayFullName(user.data)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DisplayUsers;
