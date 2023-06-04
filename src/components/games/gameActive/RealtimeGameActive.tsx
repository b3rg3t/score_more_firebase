import { doc, onSnapshot, collection, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { GAME_TYPE, ROUND_TYPE } from "../typescript/types";
import { db } from "../../../lib/firebase/init-firebase";
import { FirebaseTypes } from "../../../lib/firebase/typescript";
import WrapperHeader from "../../layout/general/WrapperHeader";
import useApiHook from "../../api/useApiHook";
import { FETCH_FUNCTIONS } from "../../api/types";
import FetchHandler from "../../layout/general/FetchHandler";
import RoundList from "../round/RoundList";

const { GET_GAME } = FETCH_FUNCTIONS;
const { GAMES } = FirebaseTypes;

interface GameActiveProps {
  id: string;
  round?: string;
}

const RealtimeGameActive = ({ id, round }: GameActiveProps) => {
  const [{ isError, isLoading, data }] = useApiHook(GET_GAME, id);
  const [rounds, setRounds] = useState<ROUND_TYPE[] | null>(null);
  const [game, setGame] = useState<GAME_TYPE | null>(null);

  useEffect(() => {
    if (data) {
      setGame(data);
    }
  }, [data !== undefined]);

  useEffect(() => {
    const docRef = collection(db, GAMES, id, "rounds");

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      const rounds: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        scores: doc.data(),
      }));
      setRounds(rounds);
    });

    return () => {
      unsubscribe();
    };
  }, [id?.length]);

  return (
    <FetchHandler isError={isError} isLoading={isLoading} data={data}>
      <>
        <WrapperHeader title={game?.name ? game?.name : "Unknown"} />
        <RoundList rounds={rounds}/>
      </>
    </FetchHandler>
  );
};

export default RealtimeGameActive;
