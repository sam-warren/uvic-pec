import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./plugins/vuetify";
import vuetify from "./plugins/vuetify";
import VueTheMask from "vue-the-mask";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.use(VueTheMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
