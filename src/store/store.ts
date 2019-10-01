import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { App, CurrentUser } from "./modules";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage
});

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    App,
    CurrentUser,
  },
  plugins: [vuexLocal.plugin]
};

export default new Vuex.Store(store);
