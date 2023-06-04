import React from "react";
import { GAME_TYPE } from "../typescript/types";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helperFunctions";
import WrapperCard from "../../layout/general/WrapperCard";

interface GameListCardProps {
  game: GAME_TYPE;
}

const GameListCard = ({ game }: GameListCardProps) => {
  return (
    <WrapperCard>
      <>
        <header className="border-bottom">
          <Link to={`/games/game/${game.id}`}>{game.name}</Link>
        </header>
        <section>
         <ul>
          <li>Leader: b3rg3t</li>
         </ul>
        </section>
        <footer className="border-top text-sm d-flex justify-content-between text-muted">
          <span>{formatDate({ date: game.created.seconds })}</span>
          <span>{game.id}</span>
        </footer>
      </>
    </WrapperCard>
  );
};

export default GameListCard;
