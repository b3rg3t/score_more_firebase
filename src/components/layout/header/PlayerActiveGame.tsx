import { observer } from "mobx-react";
import React from "react";
import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";
import authUserStore from "../../../store/AuthUser";

const PlayerActiveGame = observer(() => {
  if (authUserStore.activeGame) {
    return (
      <Link to={`/games/game/${authUserStore.activeGame}`}>
        <FaGamepad />
      </Link>
    );
  } else {
    return <></>;
  }
});

export default PlayerActiveGame;
