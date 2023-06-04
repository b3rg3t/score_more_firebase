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
  rounds?: ROUND_TYPE[];
};

export type ROUND_TYPE = {
  id: string;
  scores: ROUND_SCORE;
};

export type ROUND_SCORE = {
  score: number;
  user: USER;
};
