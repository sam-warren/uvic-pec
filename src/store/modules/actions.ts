import { ActionTree } from "vuex";
import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";
import { RootState } from "../types";

export const ClubSignUpActions: ActionTree<ClubSignUpFormTypes, RootState> = {
    firstName(context: any, payload: string) {
        context.commit("firstName", payload);
    },
    lastName(context: any, payload: string) {
        context.commit("lastName", payload);
    },
    birthdate(context: any, payload: string) {
        context.commit("birthdate", payload);
    },
    isUvicStudent(context: any, payload: boolean) {
        context.commit("isUvicStudent", payload);
    },
    studentNumber(context: any, payload: string) {
        context.commit("studentNumber", payload);
    },
    medicalConditions(context: any, payload: string) {
        context.commit("medicalConditions", payload);
    },
    password(context: any, payload: string) {
        context.commit("password", payload);
    },
    destroy(context: any) {
        context.commit("destory");
    },
};

export const EmergencyContactActions: ActionTree<EmergencyContactTypes, RootState> = {
    firstName(context: any, payload: string) {
        context.commit("firstName", payload);
    },
    lastName(context: any, payload: string) {
        context.commit("lastName", payload);
    },
    relation(context: any, payload: string) {
        context.commit("relation", payload);
    },
    phoneNumber(context: any, payload: string) {
        context.commit("phoneNumber", payload);
    },
    destroy(context: any) {
        context.commit("destory");
    },
};
