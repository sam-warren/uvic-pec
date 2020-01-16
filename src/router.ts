import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import SignUpView from "./views/SignUpView.vue";
import LogInView from "./views/LogInView.vue";
import ForgotPasswordView from "./views/ForgotPasswordView.vue";
import TripsView from "./views/TripsView.vue";
import ProfileView from "./views/ProfileView.vue";
import ContactView from "./views/ContactView.vue";
import store from "@/store/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/login",
      name: "login",
      component: LogInView,
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: ForgotPasswordView,
    },
    {
      path: "/trips",
      name: "trips",
      component: TripsView,
      meta: {
        authRequired: true,
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        authRequired: true,
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
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
