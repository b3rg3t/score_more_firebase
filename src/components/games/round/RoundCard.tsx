import React from "react";
import WrapperCard from "../../layout/general/WrapperCard";
import { ROUND_TYPE } from "../typescript/types";

interface RoundCardProps {
  round: ROUND_TYPE;
}

const RoundCard = ({ round }: RoundCardProps) => {
  return (
    <WrapperCard>
      <>{round.id}</>
    </WrapperCard>
  );
};

export default RoundCard;
