import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { userCollectionRef } from "../../lib/firebase/firestore.collections";
import { USER } from "../../typescript/users";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import LoadingSpinner from "../utils/LoadingSpinner";
import WrapperHeader from "../layout/general/WrapperHeader";

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
    <section className="w-100 overflow-auto">
      <WrapperHeader title="Users">
        <Link
          to="/users/create-user"
          className="btn btn-sm btn-primary d-flex align-items-center"
        >
          <FaPlus />
        </Link>
      </WrapperHeader>
      {users.length > 0 ? (
        <ul className="list-unstyled d-flex flex-column justify-content-start mb-0">
          {users.map((user: USER, index: number) => {
            return <UserCard key={user.id} user={user} index={index} />;
          })}
        </ul>
      ) : (
        <div className="w-100 d-flex justify-content-center align-items-center">
          <LoadingSpinner />
        </div>
      )}
    </section>
  );
};

export default RealtimeUserList;
