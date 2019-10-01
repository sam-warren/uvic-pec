import { MutationTree } from "vuex";
import firebase from "firebase/app";
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
  },
  logOut(state: CurrentUserTypes) {
    state.uid = "";
    state.firstName = "";
    state.lastName = "";
    state.email = "";
  },
  async syncUserData(state: CurrentUserTypes, payload: any) {
    state.uid = payload.uid;
    state.firstName = payload.firstName;
    state.lastName = payload.lastName;
    state.email = payload.email;
    state.hasVerified = await firebase.auth().currentUser!.emailVerified;
  },
};
