import { MutationTree } from "vuex";
import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";

export const ClubSignUpFormMutations: MutationTree<ClubSignUpFormTypes> = {
    firstName(state: ClubSignUpFormTypes, payload: string) {
        state.firstName = payload;
    },
    lastName(state: ClubSignUpFormTypes, payload: string) {
        state.lastName = payload;
    },
    email(state: ClubSignUpFormTypes, payload: string) {
        state.email = payload;
    },
    phoneNumber(state: ClubSignUpFormTypes, payload: string) {
        state.phoneNumber = payload;
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
};

export const EmergencyContactMutations: MutationTree<EmergencyContactTypes> = {
    firstName(state: EmergencyContactTypes, payload: string) {
        state.firstName = payload;
    },
    lastName(state: EmergencyContactTypes, payload: string) {
        state.lastName = payload;
    },
    relation(state: EmergencyContactTypes, payload: string) {
        state.relation = payload;
    },
    phoneNumber(state: EmergencyContactTypes, payload: string) {
        state.phoneNumber = payload;
    },
};
