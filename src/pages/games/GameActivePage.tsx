import React from "react";
import WrapperPage from "../../components/layout/general/WrapperPage";
import { useParams } from "react-router-dom";
import RealtimeGameActive from "../../components/games/gameActive/RealtimeGameActive";

const GameActivePage = () => {
  let { gameId, round } = useParams();
  return (
    <WrapperPage id="game-active">
      <RealtimeGameActive
        // @ts-ignore
        id={gameId}
        round={round}
      />
    </WrapperPage>
  );
};

export default GameActivePage;
