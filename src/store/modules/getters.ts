import { GetterTree } from "vuex";
import { AppTypes, CurrentUserTypes } from "./types";
import { RootState } from "../types";

export const AppGetters: GetterTree<AppTypes, RootState> = {
  theme(state: AppTypes): string {
    return state.theme || "light";
  }
};

export const CurrentUserGetters: GetterTree<CurrentUserTypes, RootState> = {
  uid(state: CurrentUserTypes): string {
    return state.uid || "";
  },
  hasVerified(state: CurrentUserTypes): boolean {
    return state.hasVerified || false;
  },
  firstName(state: CurrentUserTypes): string {
    return state.firstName || "";
  },
  lastName(state: CurrentUserTypes): string {
    return state.lastName || "";
  },
  email(state: CurrentUserTypes): string {
    return state.email || "";
  },
  admin(state: CurrentUserTypes): boolean {
    return state.admin || false;
  }
};
