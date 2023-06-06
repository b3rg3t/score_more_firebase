import { useEffect, useReducer } from "react";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase/init-firebase";
import { DATA_ACTIONS, FETCH_FUNCTIONS, INITIAL_DATA } from "./types";
import { FirebaseTypes } from "../../lib/firebase/typescript";

const { FETCH_INITIAL, FETCH_SUCCESS, FETCH_ERROR } = DATA_ACTIONS;
const { GET_ALL_USERS, GET_USER, GET_ALL_GAMES, GET_GAME } = FETCH_FUNCTIONS;
const { USERS, GAMES } = FirebaseTypes;

const dataReducer = (
  state: INITIAL_DATA,
  action: { type: DATA_ACTIONS; payload?: any }
) => {
  switch (action.type) {
    case FETCH_INITIAL:
      return { ...state, isLoading: true, isError: undefined };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: undefined,
        data: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: {
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    default:
      throw new Error();
  }
};

export const useFetchFuntions = (
  dispatch?: React.Dispatch<{
    type: DATA_ACTIONS;
    payload?: any;
  }>
) => {
  const getUser = async (id: string) => {
    dispatch && dispatch({ type: FETCH_INITIAL });
    const userRef = doc(db, USERS, id);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      const user = docSnap.data();
      dispatch && dispatch({ type: FETCH_SUCCESS, payload: user });
      return user;
    } else {
      dispatch &&
        dispatch({
          type: FETCH_ERROR,
          payload: { message: "Not found", status: 500 },
        });
    }
  };
  const getAllUsers = async () => {
    dispatch && dispatch({ type: FETCH_INITIAL });
    const userCollectionRef = collection(db, USERS);

    getDocs(userCollectionRef)
      .then((response) => {
        const allUsers: any = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        dispatch && dispatch({ type: FETCH_SUCCESS, payload: allUsers });
        return allUsers;
      })
      .catch(
        (error) =>
          dispatch &&
          dispatch({
            type: FETCH_ERROR,
            payload: { message: error.message, status: error.status },
          })
      );
  };

  const getGame = async (id: string) => {
    dispatch && dispatch({ type: FETCH_INITIAL });
    const gameRef = doc(db, GAMES, id);
    const docSnap = await getDoc(gameRef);
    if (docSnap.exists()) {
      const game = docSnap.data();
      dispatch && dispatch({ type: FETCH_SUCCESS, payload: game });
      return game;
    } else {
      dispatch &&
        dispatch({
          type: FETCH_ERROR,
          payload: { message: "Not found", status: 500 },
        });
    }
  };
  const getAllGames = async () => {
    dispatch && dispatch({ type: FETCH_INITIAL });
    const gamesCollectionRef = collection(db, GAMES);
    getDocs(gamesCollectionRef)
      .then((response) => {
        const allUsers: any = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch && dispatch({ type: FETCH_SUCCESS, payload: allUsers });
        return allUsers;
      })
      .catch(
        (error) =>
          dispatch &&
          dispatch({
            type: FETCH_ERROR,
            payload: { message: error.message, status: error.status },
          })
      );
  };

  return { getUser, getAllUsers, getGame, getAllGames };
};

const useApiHook = (type: FETCH_FUNCTIONS, id?: string) => {
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: false,
    isError: undefined,
    data: undefined,
  });
  const { getUser, getAllUsers, getGame, getAllGames } =
    useFetchFuntions(dispatch);

  useEffect(() => {
    if (id) {
      if (type === GET_USER && id) {
        getUser(id);
      } else if (type === GET_GAME && id) {
        getGame(id);
      }
    } else {
      if (type === GET_ALL_USERS) {
        getAllUsers();
      } else if (type === GET_ALL_GAMES) {
        getAllGames();
      }
    }

    // eslint-disable-next-line
  }, [type, id]);

  return [state];
};

export default useApiHook;
