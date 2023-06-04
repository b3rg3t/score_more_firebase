import { USER } from "../../../typescript/users";

export type GAME_TYPE = {
  created: {
    seconds: number;
    nanoseconds: number;
  };
  createdBy: {};
  id: string;
  isActive: boolean;
  name: string;
  rounds?: ROUND_TYPE[]
};

export type ROUND_TYPE = {
  id: string;
  scores: {score: number, uses: USER}[]
}
