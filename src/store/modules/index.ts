import { Module } from "vuex";
import { RootState } from "../types";

import { EmergencyContactTypes } from "./types";
import { EmergencyContactState } from "./state";
import { EmergencyContactGetters } from "./getters";
import { EmergencyContactActions } from "./actions";
import { EmergencyContactMutations } from "./mutations";

const namespaced: boolean = true;

export const EmergencyContact: Module<EmergencyContactTypes, RootState> = {
    namespaced,
    state: EmergencyContactState,
    getters: EmergencyContactGetters,
    actions: EmergencyContactActions,
    mutations: EmergencyContactMutations,
};
