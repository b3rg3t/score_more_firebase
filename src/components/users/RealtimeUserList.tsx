import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { userCollectionRef } from "../../lib/firebase/firestore.collections";
import { USER } from "../../typescript/users";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const RealtimeUserList = () => {
  const [data, setData] = useState([] as any);
  useEffect(() => {
    const unsubscribe = onSnapshot(userCollectionRef, (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="w-100 overflow-auto">
      <header className="d-flex justify-content-between px-1">
        <h3 className="text-white">Users</h3>
        <Link to="/users/create-user" className="btn btn-sm btn-dark d-flex align-items-center">
          <FaPlus />
        </Link>
      </header>
      {data.length > 0 && (
        <ul className="list-unstyled d-flex flex-column justify-content-start mb-0 px-1">
          {data.map((user: USER, index: number) => {
            return <UserCard key={user.id} user={user} index={index} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default RealtimeUserList;
