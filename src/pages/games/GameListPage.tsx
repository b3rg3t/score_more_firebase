import React from "react";

import GameList from "../../components/games/gameList/GameList";
import WrapperPage from "../../components/layout/general/WrapperPage";

const GameListPage = () => (
  <WrapperPage id="game-list">
    <GameList />
  </WrapperPage>
);

export default GameListPage;
