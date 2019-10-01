import { ActionTree } from "vuex";
import { AppTypes, CurrentUserTypes } from "./types";
import { RootState } from "../types";
import firebase from "firebase/app";

export const AppActions: ActionTree<AppTypes, RootState> = {
  theme(context: any, payload: string) {
    context.commit("theme", payload);
  }
};

export const CurrentUserActions: ActionTree<CurrentUserTypes, RootState> = {
  uid(context: any, payload: string) {
    context.commit("uid", payload);
  },
  firstName(context: any, payload: string) {
    context.commit("firstName", payload);
  },
  lastName(context: any, payload: string) {
    context.commit("lastName", payload);
  },
  email(context: any, payload: string) {
    context.commit("email", payload);
  },
  logIn(context: any, payload: any) {
    context.commit("logIn", payload.user);
  },
  logOut(context: any) {
    context.commit("logOut");
  },
  syncUserData(context: any, payload: any) {
    firebase
      .firestore()
      .collection("users")
      .doc(payload.uid)
      .get()
      .then(res => {
        // Store user in local storage
        if (res.data()) {
            context.commit("syncUserData", res.data());
        }
      });
  }
};
