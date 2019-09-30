import { MutationTree } from "vuex";
import { EmergencyContactTypes, AppTypes } from "./types";

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
    destroy(state: EmergencyContactTypes) {
        state.firstName = "";
        state.lastName = "";
        state.relation = "";
        state.phoneNumber = "";
    }
};

export const AppMutations: MutationTree<AppTypes> = {
    formTypes(state: AppTypes, payload: string) {
        state.formType = payload;
    }
};
