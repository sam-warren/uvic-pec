import { ActionTree } from "vuex";
import { AppTypes, CurrentUserTypes } from "./types";
import { RootState } from "../types";

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
    logOut(context: any) {
        context.commit("uid", "");
        context.commit("firstName", "");
        context.commit("lastName", "");
        context.commit("email", "");
    }
};
