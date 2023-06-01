import { useParams } from "react-router-dom";
import useApiHook from "../api/useApiHook";
import { FETCH_FUNCTIONS } from "../api/types";
import FetchHandler from "../layout/general/FetchHandler";
import { displayFullName } from "./forms/helper";

const { GET_USER } = FETCH_FUNCTIONS;

const User = () => {
  let { userId } = useParams();
  const [{ isError, isLoading, data }] = useApiHook(GET_USER, userId);

  const fullName = data && displayFullName(data);

  return (
    <FetchHandler isError={isError} isLoading={isLoading}>
      <section className="w-100 d-flex align-items-start">
        <div className="bg-white text-dark w-100 rounded border p-1">
          <p>
            <span className="fw-bold">{data?.userName}</span>{" "}-{" "}
            <span>{fullName}</span>
          </p>
        </div>
      </section>
    </FetchHandler>
  );
};

export default User;
