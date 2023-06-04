export enum DATA_ACTIONS {
  FETCH_INITIAL = "FETCH_INITIAL",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}

export type INITIAL_DATA = {
  isLoading: boolean;
  isError?: ERROR_TYPE;
  data: any;
};

export type ERROR_TYPE = {
  message: string;
  status: number;
};

export enum FETCH_FUNCTIONS {
  GET_ALL_USERS = "GET_ALL_USERS",
  GET_USER = "GET_USER",
  GET_ALL_GAMES = "GET_ALL_GAMES",
  GET_GAME = "GET_GAME"
}
