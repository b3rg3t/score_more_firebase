import { collection } from "firebase/firestore";
import { db } from "./init-firebase";
import { FirebaseTypes } from "./typescript";

const { USERS, GAMES } = FirebaseTypes;

const userCollectionRef = collection(db, USERS);
const gameCollectionRef = collection(db, GAMES);
const roundsCollectionRef = collection(db, GAMES);


export { userCollectionRef, gameCollectionRef };
