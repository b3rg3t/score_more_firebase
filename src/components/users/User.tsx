import { useParams } from "react-router-dom";
import useApiHook from "../api/useApiHook";
import { FETCH_FUNCTIONS } from "../api/types";
import FetchHandler from "../layout/general/FetchHandler";
import { displayFullName } from "./forms/helper";
import ProfilePic from "./ProfilePic";
import WrapperHeader from "../layout/general/WrapperHeader";

const { GET_USER } = FETCH_FUNCTIONS;

const User = () => {
  let { userId } = useParams();
  const [{ isError, isLoading, data }] = useApiHook(GET_USER, userId);

  const fullName = data && displayFullName(data);
  console.log(data);
  return (
    <FetchHandler isError={isError} isLoading={isLoading} data={data}>
      <section className="w-100 d-flex align-items-start">
        <div className="bg-white text-dark w-100 rounded border p-1 box-shadow d-flex">
          <div className="me-2">
            <ProfilePic size={50} iconStyle="p-1" />
          </div>
          <div>
            <WrapperHeader title={data?.userName} className="mb-0 flex-column">
              {fullName}
            </WrapperHeader>
          </div>
        </div>
      </section>
    </FetchHandler>
  );
};

export default User;
