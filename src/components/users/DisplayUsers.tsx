import React from "react";

import { USER } from "../../typescript/users";
import useApiHook from "../api/useApiHook";
import { FETCH_FUNCTIONS } from "../api/typescript";
import LoadingSpinner from "../utils/LoadingSpinner";
import ErrorHandler from "../utils/ErrorHandler";
import UserCard from "./UserCard";
import { NavLink } from "react-router-dom";

const { GET_ALL_USERS } = FETCH_FUNCTIONS;

const DisplayUsers = () => {
  const [{ isError, isLoading, data }] = useApiHook(GET_ALL_USERS);

  if (isLoading) {
    return <LoadingSpinner />;
  } else if (isError) {
    return <ErrorHandler isError={isError} />;
  } else if (!data) {
    return <></>;
  }
  return (
    <div className="bg-gradient">
      <header className="d-flex justify-content-between">
        <h3>Users</h3>
        <NavLink to="/users/create-user" className="btn btn-sm btn-dark">+</NavLink>
      </header>
      {data.length > 0 && (
        <ul className="list-unstyled d-flex flex-column justify-content-start mb-0">
          {data.map((user: USER) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default DisplayUsers;
