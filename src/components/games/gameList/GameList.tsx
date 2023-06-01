import React from "react";
import useApiHook from "../../api/useApiHook";
import { FETCH_FUNCTIONS } from "../../api/types";
import FetchHandler from "../../layout/general/FetchHandler";
import { GAME_TYPE } from "../typescript/types";
import GameListCard from "./GameListCard";
import ButtonCreateGame from "../ButtonCreateGame";
import WrapperHeader from "../../layout/general/WrapperHeader";

const { GET_ALL_GAMES } = FETCH_FUNCTIONS;

const GameList = () => {
  const [{ isError, isLoading, data }] = useApiHook(GET_ALL_GAMES);

  return (
    <section>
      <WrapperHeader title="Games">
        <ButtonCreateGame />
      </WrapperHeader>
      <FetchHandler isError={isError} isLoading={isLoading}>
        <ul className="list-unstyled w-100 flex-1">
          {data &&
            data?.map((game: GAME_TYPE) => (
              <GameListCard key={game.id} game={game} />
            ))}
        </ul>
      </FetchHandler>
    </section>
  );
};

export default GameList;
