import React from "react";

import GameList from "../../components/games/gameList/GameList";
import ButtonCreateGame from "../../components/games/ButtonCreateGame";

const GamePage = () => {
  return ( 
    <section id="game-page" className="w-100">
      <ButtonCreateGame />
      <GameList />
    </section>
  );
};

export default GamePage;
