import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase/initFirebase";
import { USER } from "../../typescript/users";
import { displayFullName } from "./helper";

const DisplayUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    const userCollectionRef = collection(db, "users");
    getDocs(userCollectionRef)
      .then((response) => {
        console.log(response);
        const allUsers: any = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        console.log(allUsers);
        setUsers(allUsers);
      })
      .catch((error) => console.log(error.message));
  };

  console.log(users);
  return (
    <div>
      <h3>Users</h3>
      {users.length > 0 && (
        <ul className="list-unstyled d-flex flex-column justify-content-start">
          {users.map((user: USER) => {
            return (
              <li key={user.id} className="badge badge-pill badge-primary">
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
