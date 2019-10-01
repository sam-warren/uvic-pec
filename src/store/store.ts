import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { App, CurrentUser } from "./modules";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);


const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    App,
    CurrentUser,
  },
  plugins: [createPersistedState({
    key: "vuex",
  })],
};

export default new Vuex.Store(store);
