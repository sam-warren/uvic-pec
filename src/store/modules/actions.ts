import { ActionTree } from "vuex";
import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";
import { RootState } from "../types";

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
