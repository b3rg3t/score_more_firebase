import React, { useEffect, useState } from "react";
import { ROUND_TYPE } from "../typescript/types";
import WrapperList from "../../layout/general/WrapperList";
import RoundCard from "./RoundCard";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase/init-firebase";
import { FirebaseTypes } from "../../../lib/firebase/typescript";
import { USER } from "../../../typescript/users";

const { GAMES } = FirebaseTypes;

interface RoundListProps {
  id: string;
  round?: string;
  players: USER["data"][];
}

const RoundList = ({ id, round, players }: RoundListProps) => {
  const [rounds, setRounds] = useState<ROUND_TYPE[] | null>(null);
  useEffect(() => {
    const docRef = collection(db, GAMES, id, "rounds");

    const unsubscribe = onSnapshot(docRef, async (snapshot) => {
      const rounds: any = snapshot.docs.map((round) => {
        let newItem = round.data();

        return {
          id: round.id,
          ...newItem,
        };
      });
      setRounds(rounds);
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, [id?.length]);
  return (
    <WrapperList>
      <>
        {rounds?.length &&
          rounds.map((round, index) => (
            <RoundCard key={round.id} round={round} players={players} />
          ))}
      </>
    </WrapperList>
  );
};
export default RoundList;
