<template>
  <v-app class="grey">
    <div id="app">
      <v-app-bar app>
        <v-icon />
        <!-- <v-img :src="require('@/assets/logo-black-scalable.svg')"></v-img> -->
        <v-toolbar-title class="headline text-uppercase">
          <router-link to="/" id="header-link">
            <span class="font-weight-light">UVic</span>
            <span> PEC</span>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="mr-2" text @click="navTo('trips')">
          <span>Trips</span>
        </v-btn>
        <v-btn class="mr-2" text @click="navTo('contact')">
          <span>Contact</span>
        </v-btn>
        <v-btn v-if="!loggedIn" class="primary mr-2" text @click="navTo('login')">
          <span>Log In</span>
        </v-btn>
        <div v-if="loggedIn">
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{on}">
                <v-btn fab icon v-if="loggedIn" v-on="on" class="mr-2">
                  <v-avatar class="secondary">
                    <v-icon dark>mdi-account-circle</v-icon>
                  </v-avatar>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="navTo('/profile')">
                  <v-icon class="mr-2">person</v-icon>
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item @click="logOut">
                  <v-icon class="mr-2">lock</v-icon>
                  <v-list-item-title>Log Out</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-app-bar>
      <router-view />
      <!-- <v-footer align="center" justify="center"> 
        <v-col>
        </v-col>
      </v-footer>-->
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";
import firebase from "firebase/app";
export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  methods: {
    navTo(route) {
      this.$router.push(route);
    },
    logOut() {
      // window.localStorage.removeItem("vuex");
      this.$store.dispatch("CurrentUser/logOut");
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Redirect to home
          console.log("User signed out successfully");
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("CurrentUser/syncUserData", user);
      }
    });
  },
  computed: {
    loggedIn: {
      get() {
        return this.$store.getters["CurrentUser/uid"] !== "";
      }
    }
  }
});
</script>
<style scoped>
#header-link {
  text-decoration: inherit;
  color: inherit;
}
</style>