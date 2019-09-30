import { GetterTree } from "vuex";
import { ClubSignUpFormTypes, EmergencyContactTypes } from "./types";
import { RootState } from "../types";

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
