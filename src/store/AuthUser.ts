import { action, makeObservable, observable } from "mobx";
import { AuthUserType } from "./types";

const setAuthUser = (newValues: AuthUserType) => {
  return { ...newValues };
};

class AuthUser {
  user?: AuthUserType | null = {
    firstName: "David",
    lastName: "Berg",
    userName: "b3rg3t",
    id: "qwejn12NjNJ1",
    shortName: this.user?.firstName && this.user?.lastName ? `${this.user?.firstName} ${this.user?.lastName}` : ""
  };
  activeGame: string = "";

  constructor(user: AuthUserType) {
    makeObservable(this, {
      user: observable,
      setAuthUser: action,
    });
  }

  get getFullName(): string {
    return `${this.user?.firstName} ${this.user?.lastName}`;
  }

  setAuthUser(mewValues: AuthUserType) {
    this.user = setAuthUser({
      firstName: "David",
      lastName: "Berg",
      userName: "b3rg3t",
      id: "qwejn12NjNJ1",
    });
  }
}
// @ts-expect-error
const store = new AuthUser()

export default store;
