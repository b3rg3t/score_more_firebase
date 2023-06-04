import WrapperCard from "../../layout/general/WrapperCard";
import { ROUND_TYPE } from "../typescript/types";

interface RoundCardProps {
  round: ROUND_TYPE;
}

const RoundCard = ({ round }: RoundCardProps) => {
  return (
    <>
      <span className="badge bg-secondary mb-1">Round: {round.id}</span>
      <WrapperCard>
        <></>
      </WrapperCard>
    </>
  );
};

export default RoundCard;
