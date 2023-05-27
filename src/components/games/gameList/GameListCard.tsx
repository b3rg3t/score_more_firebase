import React from "react";
import { GAME_TYPE } from "../typescript/types";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helperFunctions";

interface GameListCardProps {
  game: GAME_TYPE;
}

const GameListCard = ({ game }: GameListCardProps) => {

  return (
    <li className="border bg-white text-black mb-1 rounded p-1">
      <header className="border-bottom">
        <Link to={`/games/game/${game.id}`}>{game.name}</Link>
      </header>
      <section>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, est
        possimus. Rem distinctio rerum necessitatibus magni commodi eveniet
        assumenda quod corrupti ipsa aut, laboriosam quas iusto reprehenderit,
        ea itaque quos.
      </section>
      <footer className="border-top text-sm d-flex justify-content-between text-muted">
        <span>{formatDate(game.created.seconds)}</span>
        <span>{game.id}</span>
      </footer>
    </li>
  );
};

export default GameListCard;
