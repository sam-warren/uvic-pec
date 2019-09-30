import { ActionTree } from "vuex";
import { EmergencyContactTypes, AppTypes } from "./types";
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

export const AppActions: ActionTree<AppTypes, RootState> = {
    formType(context: any, payload: string) {
        context.commit("formType", payload);
    }
};
