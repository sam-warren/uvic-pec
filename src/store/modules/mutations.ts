import { MutationTree } from "vuex";
import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";

export const ClubSignUpFormMutations: MutationTree<ClubSignUpFormTypes> = {
    firstName(state: ClubSignUpFormTypes, payload: string) {
        state.firstName = payload;
    },
    lastName(state: ClubSignUpFormTypes, payload: string) {
        state.lastName = payload;
    },
    birthdate(state: ClubSignUpFormTypes, payload: string) {
        state.birthdate = payload;
    },
    isUvicStudent(state: ClubSignUpFormTypes, payload: boolean) {
        state.isUvicStudent = payload;
    },
    studentNumber(state: ClubSignUpFormTypes, payload: string) {
        state.studentNumber = payload;
    },
    medicalConditions(state: ClubSignUpFormTypes, payload: string) {
        state.medicalConditions = payload;
    },
    password(state: ClubSignUpFormTypes, payload: string) {
        state.password = payload;
    },
};

export const EmergencyContactMutations: MutationTree<EmergencyContactTypes> = {
    firstName(state: EmergencyContactTypes, payload: string) {
        state.firstName = payload;
    },
    lastName(state: EmergencyContactTypes, payload: string) {
        state.lastName = payload;
    },
};
