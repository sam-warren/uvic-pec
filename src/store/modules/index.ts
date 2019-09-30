import { Module } from "vuex";
import { RootState } from "../types";

import { EmergencyContactTypes, AppTypes } from "./types";
import { EmergencyContactState, AppState } from "./state";
import { EmergencyContactGetters, AppGetters } from "./getters";
import { EmergencyContactActions, AppActions } from "./actions";
import { EmergencyContactMutations, AppMutations } from "./mutations";

const namespaced: boolean = true;

export const EmergencyContact: Module<EmergencyContactTypes, RootState> = {
    namespaced,
    state: EmergencyContactState,
    getters: EmergencyContactGetters,
    actions: EmergencyContactActions,
    mutations: EmergencyContactMutations,
};

export const App: Module<AppTypes, RootState> = {
    namespaced,
    state: AppState,
    getters: AppGetters,
    actions: AppActions,
    mutations: AppMutations,
};
