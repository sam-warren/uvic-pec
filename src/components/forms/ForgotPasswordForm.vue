<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col md="4">
          <v-card class="elevation-8">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Reset Password</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-subheader>If you've forgotten your password, enter your email and you'll be sent a link to reset it.</v-subheader>
              <v-form>
                <v-text-field
                  label="Email"
                  v-model="email"
                  name="email"
                  prepend-icon="mail"
                  type="text"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="mb-4">
              <v-btn @click="sendPasswordResetEmail" block color="primary">Reset Password</v-btn>
            </v-card-actions>
            <v-overlay :value="isLoading">
              <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import firebase from "firebase/app";

export default {
  data: () => ({
    isLoading: false,
    email: "",
    errorMessage: ""
  }),
  methods: {
    sendPasswordResetEmail() {
      this.isLoading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.isLoading = false;
          this.$router.push("/");
        })
        .catch(err => {
          this.isLoading = false;
          this.errorMessage = err.message;
          console.error(this.errorMessage);
        });
    },
  }
};
</script>
