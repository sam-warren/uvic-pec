import { Module } from "vuex";

import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";
import { RootState } from "../types";

import { ClubSignUpFormState, EmergencyContactState } from "./state";
import { ClubSignUpFormGetters, EmergencyContactGetters } from "./getters";
import { ClubSignUpActions, EmergencyContactActions } from "./actions";
import { ClubSignUpFormMutations, EmergencyContactMutations } from "./mutations";

const namespaced: boolean = true;

export const ClubSignUpForm: Module<ClubSignUpFormTypes, RootState> = {
    namespaced,
    state: ClubSignUpFormState,
    getters: ClubSignUpFormGetters,
    actions: ClubSignUpActions,
    mutations: ClubSignUpFormMutations,
};

export const EmergencyContact: Module<EmergencyContactTypes, RootState> = {
    namespaced,
    state: EmergencyContactState,
    getters: EmergencyContactGetters,
    actions: EmergencyContactActions,
    mutations: EmergencyContactMutations,
};
