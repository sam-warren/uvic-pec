import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import LogIn from "./views/LogIn.vue";
import ForgotPassword from "./views/ForgotPassword.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/login",
      name: "login",
      component: LogIn,
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: ForgotPassword,
    }
  ],
});
