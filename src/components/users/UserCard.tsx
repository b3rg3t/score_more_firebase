import React from "react";

import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { USER } from "../../typescript/users";
import { Link, NavLink } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { FirebaseTypes } from "../../lib/firebase/typescript";
import { db } from "../../lib/firebase/init-firebase";
import ProfilePic from "./ProfilePic";
import WrapperCard from "../layout/general/WrapperCard";

const { USERS } = FirebaseTypes;

interface UserCardProps {
  user: USER;
  index: number;
}

const UserCard = ({ user, index }: UserCardProps) => {
  const handleDeleteUser = (id: USER["id"]) => {
    const docRef = doc(db, USERS, id);
    deleteDoc(docRef)
      .then()
      .catch((error) => console.log(error));
  };


  return (
    <WrapperCard>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <ProfilePic size={45} wrapperStyle={"me-2"} iconStyle={"p-1"} />
          <div>
            <NavLink className="me-1 link-style" to={`/users/user/${user.id}`}>
              {user.data.userName}
            </NavLink>
            <ul className="list-unstyled d-flex">
              <small>
                <li className="me-1 text-muted">Games: ""</li>
              </small>
              <small>
                <li className="me-1 text-muted">Won: ""</li>
              </small>
              <small>
                <li className="me-1 text-muted">Lost: ""</li>
              </small>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-start">
          <Link
            to={`/users/user/${user.id}/edit`}
            className="btn btn-sm btn-primary me-1 d-flex align-items-center px-1"
          >
            <FaEdit />
          </Link>
          <button
            type="button"
            className="btn btn-sm btn-danger d-flex px-1"
            onClick={() => handleDeleteUser(user.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </WrapperCard>
  );
};

export default UserCard;
