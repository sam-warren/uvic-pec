import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { ClubSignUpForm, EmergencyContact } from "./modules";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    ClubSignUpForm,
    EmergencyContact,
  },
};
export default new Vuex.Store(store);
