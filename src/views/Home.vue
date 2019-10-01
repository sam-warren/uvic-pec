<template>
  <v-content class="mx-4 mb-4 my-4">
    <v-container class="fill-height" fluid>
      <h1>Home</h1>
    </v-container>
  </v-content>
</template>
  

<script>
import Vue from "vue";
import firebase from "firebase/app";
export default {
  data: () => ({
    currentUserName: "",
    currentUserEmail: "",
    showAlert: false,
  }),
  methods: {
    getCurrentUser() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("User ID: ", user.uid);
          this.currentUserName = user.displayName;
          this.currentUserEmail = user.email;
          if (!user.emailVerified) {
            this.showAlert = true;
          }
        } else {
          this.currentUserName = "stranger";
          this.currentUserEmail = "";
        }
      });
    },
    beforeMount() {
      this.getCurrentUser();
    }
  }
};
</script>
