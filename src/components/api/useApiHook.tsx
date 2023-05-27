import { useEffect, useReducer } from "react";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase/init-firebase";
import { DATA_ACTIONS, FETCH_FUNCTIONS, INITIAL_DATA } from "./types";
import { FirebaseTypes } from "../../lib/firebase/typescript";

const { FETCH_INITIAL, FETCH_SUCCESS, FETCH_ERROR } = DATA_ACTIONS;
const { GET_ALL_USERS, GET_USER, GET_ALL_GAMES } = FETCH_FUNCTIONS;
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

const useApiHook = (type: FETCH_FUNCTIONS, id?: string) => {
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: false,
    isError: undefined,
    data: undefined,
  });

  const getAllUsers = async () => {
    dispatch({ type: FETCH_INITIAL });
    const userCollectionRef = collection(db, USERS);

    getDocs(userCollectionRef)
      .then((response) => {
        const allUsers: any = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        dispatch({ type: FETCH_SUCCESS, payload: allUsers });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_ERROR,
          payload: { message: error.message, status: error.status },
        })
      );

    return state;
  };

  const getUser = async (id: string) => {
    dispatch({ type: FETCH_INITIAL });
    const userRef = doc(db, USERS, id);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      dispatch({ type: FETCH_SUCCESS, payload: docSnap.data() });
    } else {
      dispatch({
        type: FETCH_ERROR,
        payload: { message: "Not found", status: 500 },
      });
    }
  };

  const getAllGames = async () => {
    dispatch({ type: FETCH_INITIAL });
    const gamesCollectionRef = collection(db, GAMES);
    getDocs(gamesCollectionRef)
      .then((response) => {
        const allUsers: any = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch({ type: FETCH_SUCCESS, payload: allUsers });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_ERROR,
          payload: { message: error.message, status: error.status },
        })
      );
    return state;
  };

  useEffect(() => {
    if (type === GET_ALL_USERS) {
      getAllUsers();
    } else if (type === GET_USER && id) {
      getUser(id);
    } else if (type === GET_ALL_GAMES) {
      getAllGames();
    }
    // eslint-disable-next-line
  }, [type]);

  return [state];
};

export default useApiHook;
