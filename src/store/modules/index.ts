import { Module } from "vuex";
import { RootState } from "../types";

import { AppTypes, CurrentUserTypes } from "./types";
import { AppState, CurrentUserState } from "./state";
import { AppGetters, CurrentUserGetters } from "./getters";
import { AppActions, CurrentUserActions } from "./actions";
import { AppMutations, CurrentUserMutations } from "./mutations";

const namespaced: boolean = true;

export const App: Module<AppTypes, RootState> = {
    namespaced,
    state: AppState,
    getters: AppGetters,
    actions: AppActions,
    mutations: AppMutations,
};

export const CurrentUser: Module<CurrentUserTypes, RootState> = {
    namespaced,
    state: CurrentUserState,
    getters: CurrentUserGetters,
    actions: CurrentUserActions,
    mutations: CurrentUserMutations,
};
