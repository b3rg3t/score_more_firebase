import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { userCollectionRef } from "../../lib/firebase/firestore.collections";
import { USER } from "../../typescript/users";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import LoadingSpinner from "../utils/LoadingSpinner";

const RealtimeUserList = () => {
  const [users, setUsers] = useState([] as any);

  useEffect(() => {
    const unsubscribe = onSnapshot(userCollectionRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="w-100 overflow-auto">
      <header className="d-flex justify-content-between px-1 mt-1">
        <h3 className="text-white">Users</h3>
        <Link
          to="/users/create-user"
          className="btn btn-sm btn-primary d-flex align-items-center"
        >
          <FaPlus />
        </Link>
      </header>
      {users.length > 0 ? (
        <ul className="list-unstyled d-flex flex-column justify-content-start mb-0 px-1">
          {users.map((user: USER, index: number) => {
            return <UserCard key={user.id} user={user} index={index} />;
          })}
        </ul>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default RealtimeUserList;
