import { useParams } from "react-router-dom";
import WrapperPage from "../../components/layout/general/WrapperPage";
import GameForm from "../../components/games/forms/GameForm";

const GameFormPage = () => {
  let { gameId } = useParams();
  return (
    <WrapperPage id={gameId ? "edit-game" : "create-game"}>
      <GameForm />
    </WrapperPage>
  );
};

export default GameFormPage;
