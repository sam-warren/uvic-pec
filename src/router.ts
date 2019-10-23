import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import LogIn from "./views/LogIn.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import Trips from "./views/Trips.vue";
import Profile from "./views/Profile.vue";
import Contact from "./views/Contact.vue";
import store from "@/store/store";

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: "/trips",
      name: "trips",
      component: Trips,
      meta: {
        authRequired: true,
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        authRequired: true,
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.authRequred)) {
//     if (store.getters["CurrentUser/uid"] === "") {
//       next({
//         path: "/login",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else if (to.matched.some(record => record.meta.adminRequired)) {
//     if (store.getters["CurrentUser/admin"] === false) {
//       next({
//         path: "/home",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
