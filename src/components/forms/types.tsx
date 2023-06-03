import { HTMLInputTypeAttribute } from "react";
import { USER } from "../../typescript/users";

export type INPUT_DATA = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute | INPUT_ENUM;
  defaultValue?: string;
  required: boolean;
  registerParams?: any;
};

export enum INPUT_ENUM {
  SELECT_PLAYERS = "select-players",
  TEXT = "text",
}

export type PLAYER_OPTION = {
    label: USER["data"]["userName"],
    data?: USER["data"],
    id: USER["id"]
};
