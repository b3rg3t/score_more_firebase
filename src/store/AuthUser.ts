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
    shortName:
      this.user?.firstName && this.user?.lastName
        ? `${this.user?.firstName} ${this.user?.lastName}`
        : "",
  };
  activeGame: string | null = "";

  constructor() {
    makeObservable(this, {
      user: observable,
      setAuthUser: action,
      getFullName: action,
      activeGame: observable,
      setActiveGame: action,
    });
  }

  get getFullName(): string {
    return `${this.user?.firstName} ${this.user?.lastName}`;
  }

  setAuthUser(newValues: AuthUserType) {
    this.user = setAuthUser(newValues);
  }

  setActiveGame(gameId: string) {
    this.activeGame = gameId;
  }
}

const authUserStore = new AuthUser();

export default authUserStore;
