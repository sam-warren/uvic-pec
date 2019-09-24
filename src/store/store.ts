import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
// import modules

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    // modules go here
  },
};
export default new Vuex.Store(store);
