import React from "react";
import DynamicForm from "../../forms/DynamicForm";
import { gameFormConfig } from "./helper";

interface GameFormProps {
  id?: string;
}

const GameForm = ({ id }: GameFormProps) => {
  return (
    <DynamicForm
      title={id ? "Edit game" : "Create new game"}
      inputs={gameFormConfig}
    />
  );
};

export default GameForm;
