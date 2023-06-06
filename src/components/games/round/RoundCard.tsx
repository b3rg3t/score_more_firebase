import { USER } from "../../../typescript/users";
import WrapperCard from "../../layout/general/WrapperCard";
import { ROUND_TYPE } from "../typescript/types";
import { Link } from "react-router-dom";
import ProfilePic from "../../users/ProfilePic";

interface RoundCardProps {
  round: ROUND_TYPE;
  players: USER["data"][];
}

const RoundCard = ({ round, players }: RoundCardProps) => {
  return (
    <>
      <span className="badge bg-secondary mb-1">Round: {round.id}</span>
      <WrapperCard>
        <ul className="list-unstyled">
          {round.scores.map((r, index) => {
            const playerName = players.find((player) => {
              return player.uId === r?.player.id;
            });
            return (
              <li key={r.player.id} className="d-flex flex-column">
       
    
                  <Link to={`/users/user/${r.player.id}`} className="d-flex align-items-center">
                    <ProfilePic wrapperStyle="me-1" />
                    {playerName?.userName}
                  </Link>
                  <span>Score: {r.score}</span>
      
              </li>
            );
          })}
        </ul>
      </WrapperCard>
    </>
  );
};

export default RoundCard;
