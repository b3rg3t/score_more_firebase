import { useEffect, useReducer } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase/initFirebase";
import { DATA_ACTIONS, FETCH_FUNCTIONS, INITIAL_DATA } from "./typescript";

const { FETCH_INITIAL, FETCH_SUCCESS, FETCH_ERROR } = DATA_ACTIONS;
const { GET_ALL_USERS } = FETCH_FUNCTIONS;

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

const useApiHook = (type: FETCH_FUNCTIONS) => {
  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: false,
    isError: undefined,
    data: undefined,
  });

  const getAllUsers = async () => {
    dispatch({ type: FETCH_INITIAL });
    const userCollectionRef = collection(db, "users");

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

  useEffect(() => {
    if (type === GET_ALL_USERS) {
      getAllUsers();
    }
    // eslint-disable-next-line
  }, [type]);

  return [state];
};

export default useApiHook;
