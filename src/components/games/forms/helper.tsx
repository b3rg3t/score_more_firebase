import { INPUT_ENUM } from "../../forms/types";

const { TEXT, SELECT_PLAYERS} = INPUT_ENUM;

const gameFormConfig = [
  {
    label: "Name of game",
    name: "name",
    type: TEXT,
    placeholder: "Lord of the rings...",
    required: true,
  },
  {
    label: "Select players",
    name: "players",
    type: SELECT_PLAYERS,
    placeholder: "Select players...",
    required: true,
  },
];

export { gameFormConfig };
