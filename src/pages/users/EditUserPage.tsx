import React from "react";
import EditUserForm from "../../components/users/EditUserForm";
import { useParams } from "react-router-dom";

const EditUserPage = () => {
  let { userId } = useParams();

  return (
    <div>
      <EditUserForm id={userId ? userId : ""} />
    </div>
  );
};

export default EditUserPage;
