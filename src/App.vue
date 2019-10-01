<template>
  <v-app class="grey">
    <div id="app">
      <v-app-bar app>
        <v-icon />
        <!-- <v-img :src="require('@/assets/logo-black-scalable.svg')"></v-img> -->
        <v-toolbar-title class="headline text-uppercase">
          <router-link to="/" id="header-link">
            <span class="font-weight-light">UVic</span>
            <span>PEC</span>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="mr-4" text @click="navTo('trips')">
          <span>Trips</span>
        </v-btn>
        <v-btn class="primary mr-4" text @click="navTo('login')">
          <span>Log In</span>
        </v-btn>
        <v-btn secondary mr-4 text @click="logOut">
          <span>Log Out</span>
        </v-btn>
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
      window.localStorage.removeItem("vuex");
      firebase
        .auth()
        .signOut()
        .then((res) => {
          // Redirect to home
          console.log("User signed out successfully", res);
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err.message);
        });
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