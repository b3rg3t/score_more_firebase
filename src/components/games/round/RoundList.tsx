import React from "react";
import { ROUND_TYPE } from "../typescript/types";
import WrapperList from "../../layout/general/WrapperList";
import RoundCard from "./RoundCard";

interface RoundListProps {
  rounds: ROUND_TYPE[] | null;
}

const RoundList = ({ rounds }: RoundListProps) => {
  return (
    <WrapperList>
      <>
        {rounds?.length &&
          rounds.map((round, index) => (
            <RoundCard key={round.id} round={round} />
          ))}
      </>
    </WrapperList>
  );
};
export default RoundList;
