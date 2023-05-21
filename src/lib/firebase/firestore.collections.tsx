import { collection } from "firebase/firestore";
import { db } from "./init-firebase";
import { FirebaseTypes } from "./typescript";

const { USERS } = FirebaseTypes;

const userCollectionRef = collection(db, USERS);

export { userCollectionRef };
