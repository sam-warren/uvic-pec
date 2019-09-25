<template>
  <v-app class="grey">
    <div id="app">
      <v-app-bar app>
        <v-icon/>
        <!-- <v-img :src="require('@/assets/logo-black-scalable.svg')"></v-img> -->
        <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-light">UVic </span>
          <span>PEC</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="mr-4" text @click="navTo('trips')">
          <span>Trips</span>
        </v-btn>
        <v-btn class="primary mr-4" text @click="navTo('signup')">
          <span>Sign Up</span>
        </v-btn>
      </v-app-bar>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
  methods: {
    navTo(route) {
      this.$router.push(route);
    },
  },
});
</script>
