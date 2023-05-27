import React from "react";
import useApiHook from "../../api/useApiHook";
import { FETCH_FUNCTIONS } from "../../api/types";
import FetchHandler from "../../layout/general/FetchHandler";
import { GAME_TYPE } from "../typescript/types";
import GameListCard from "./GameListCard";

const { GET_ALL_GAMES } = FETCH_FUNCTIONS;

const GameList = () => {
  const [{ isError, isLoading, data }] = useApiHook(GET_ALL_GAMES);
  console.log(data);
  return (
    <FetchHandler isError={isError} isLoading={isLoading}>
      <section>
        <h4>Games</h4>
        <ul className="list-unstyled w-100 flex-1 px-1">
          {data && data?.map((game: GAME_TYPE) => (
            <GameListCard key={game.id} game={game} />
          ))}
        </ul>
      </section>
    </FetchHandler>
  );
};

export default GameList;
