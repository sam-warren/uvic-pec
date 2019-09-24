import { GetterTree } from "vuex";
import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";
import { RootState } from "../types";

export const ClubSignUpFormGetters: GetterTree<ClubSignUpFormTypes, RootState> = {
    firstName(state: ClubSignUpFormTypes): string {
        return state.firstName || "";
    },
    lastName(state: ClubSignUpFormTypes): string {
        return state.lastName || "";
    },
    birthdate(state: ClubSignUpFormTypes): string {
        return state.birthdate || "";
    },
    isUvicStudent(state: ClubSignUpFormTypes): boolean {
        return state.isUvicStudent || false;
    },
    studentNumber(state: ClubSignUpFormTypes): string {
        return state.studentNumber || "";
    },
    medicalConditions(state: ClubSignUpFormTypes): string {
        return state.medicalConditions || "";
    },
    password(state: ClubSignUpFormTypes): string {
        return state.password || "";
    },
};

export const EmergencyContactGetters: GetterTree<EmergencyContactTypes, RootState> = {
    firstName(state: EmergencyContactTypes): string {
        return state.firstName || "";
    },
    lastName(state: EmergencyContactTypes): string {
        return state.lastName || "";
    },
    relation(state: EmergencyContactTypes): string {
        return state.relation || "";
    },
    phoneNumber(state: EmergencyContactTypes): string {
        return state.phoneNumber || "";
    },
};
