import { useMemo, useState } from "react";
import { query, where, getDocs } from "firebase/firestore";

import WrapperHeader from "../../layout/general/WrapperHeader";
import useApiHook from "../../api/useApiHook";
import { FETCH_FUNCTIONS } from "../../api/types";
import FetchHandler from "../../layout/general/FetchHandler";
import RoundList from "../round/RoundList";

import { userCollectionRef } from "../../../lib/firebase/firestore.collections";
import { USER } from "../../../typescript/users";

const { GET_GAME } = FETCH_FUNCTIONS;

interface GameActiveProps {
  id: string;
  round?: string;
}

const RealtimeGameActive = ({ id, round }: GameActiveProps) => {
  const [{ isError, isLoading, data }] = useApiHook(GET_GAME, id);
  const [players, setPlayers] = useState<USER["data"][]>([]);

  useMemo(() => {
    const getUserData = async () => {
      const userQuery = query(
        userCollectionRef,
        where("uId", "in", data?.playerIds)
      );
      const userDocs = await getDocs(userQuery);
      userDocs.forEach((userD) => {
        const user = userD.data();
        // @ts-ignore
        setPlayers((prevState) => {
          if (prevState.find((prev) => prev.uId === user.uId)) {
            return prevState;
          }
          return [...prevState, user];
        });
      });
    };
    if (data) {
      getUserData();
    }
  }, [data]);

  return (
    <FetchHandler isError={isError} isLoading={isLoading} data={data}>
      <>
        <WrapperHeader title={data?.name ? data?.name : "Unknown"} />
        {players && <RoundList id={id} round={round} players={players} />}
      </>
    </FetchHandler>
  );
};

export default RealtimeGameActive;
