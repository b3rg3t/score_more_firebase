import React from "react";

import GameList from "../../components/games/GameList";
import ButtonCreateGame from "../../components/games/ButtonCreateGame";

const GamePage = () => {
  return (
    <div>
      <ButtonCreateGame />
      <GameList />
    </div>
  );
};

export default GamePage;
