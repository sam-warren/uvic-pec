import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { EmergencyContact, App } from "./modules";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    EmergencyContact,
    App
  },
};
export default new Vuex.Store(store);
