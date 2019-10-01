<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col md="4">
          <v-card class="elevation-8">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Log In</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="loginForm.email"
                  label="Email"
                  name="email"
                  prepend-icon="person"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="loginForm.password"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-subheader>
              Forgot your password? You can reset it&nbsp;
              <a @click="navTo('forgotpassword')">here</a>
            </v-subheader>
            <v-card-actions class="mb-4">
              <v-btn @click="logIn" block color="primary">Login</v-btn>
            </v-card-actions>
            <v-divider />
            <v-subheader>
              Don't have an account?&nbsp;
              <a @click="navTo('signup')">Sign up</a>
            </v-subheader>
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
    errorMessage: "",
    loginForm: {
      email: "",
      password: ""
    }
  }),
  methods: {
    logIn() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then((res) => {
          console.log("User signed in");
          this.isLoading = false;
          this.$router.push("/");
        })
        .catch(err => {
          this.isLoading = false;
          this.errorMessage = err.message;
          console.error(this.errorMessage);
        });
    },
    navTo(value) {
      this.$router.push(value);
    }
  }
};
</script>
