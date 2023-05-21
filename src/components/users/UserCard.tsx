import React from "react";
import { USER } from "../../typescript/users";
import { displayFullName } from "./helper";
import { NavLink } from "react-router-dom";

interface UserCardProps {
  user: USER;
}

const UserCard = ({ user }: UserCardProps) => {
  const handleDeleteUser = (id: USER["id"]) => {
    console.log(id);
  };

  const handleEditUser = (id: USER["id"]) => {};

  return (
    <li
      key={user.id}
      className="bg-white border d-flex justify-content-between"
    >
      <div>
        <NavLink className="me-1" to={`/users/user/${user.id}`}>
          {user.data.userName}
        </NavLink>
        <span>{displayFullName(user.data)}</span>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => handleEditUser(user.id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => handleDeleteUser(user.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default UserCard;
