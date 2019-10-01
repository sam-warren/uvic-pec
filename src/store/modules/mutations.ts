import { MutationTree } from "vuex";
import { AppTypes, CurrentUserTypes } from "./types";

export const AppMutations: MutationTree<AppTypes> = {
  theme(state: AppTypes, payload: string) {
    state.theme = payload;
  }
};

export const CurrentUserMutations: MutationTree<CurrentUserTypes> = {
  uid(state: CurrentUserTypes, payload: string) {
    state.uid = payload;
  },
  firstName(state: CurrentUserTypes, payload: string) {
    state.firstName = payload;
  },
  lastName(state: CurrentUserTypes, payload: string) {
    state.lastName = payload;
  },
  email(state: CurrentUserTypes, payload: string) {
    state.email = payload;
  }
};
