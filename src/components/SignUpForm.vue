<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-card>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Sign Up</v-toolbar-title>
          </v-toolbar>
          <v-subheader class="my-2">Signing up for UVic PEC allows you to register for trips.</v-subheader>
          <v-divider></v-divider>
          <v-card-text>
            <v-form ref="form" @submit="submitForm">
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-text-field
                    label="First Name"
                    validate-on-blur
                    v-model="signUpForm.firstName"
                    :rules="requiredFieldRules"
                    prepend-icon="person"
                  ></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field
                    label="Last Name"
                    validate-on-blur
                    :rules="requiredFieldRules"
                    v-model="signUpForm.lastName"
                  ></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field
                    type="email"
                    label="Email"
                    :rules="emailRules"
                    v-model="signUpForm.email"
                    prepend-icon="email"
                    validate-on-blur
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-text-field
                    v-model="signUpForm.phoneNumber"
                    type="tel"
                    v-mask="'+1 (###) ### ####'"
                    label="Phone Number"
                    :rules="phoneNumberRules"
                    prepend-icon="phone"
                    validate-on-blur
                    name="phoneNumber"
                  ></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field
                    type="text"
                    label="Birthdate (YYYY/MM/DD)"
                    prepend-icon="event"
                    :rules="birthdateRules"
                    v-model="signUpForm.birthdate"
                    validate-on-blur
                    v-mask="'####/##/##'"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap mb-2>
                <v-flex mx-4>
                  <v-checkbox v-model="signUpForm.isUvicStudent" label="I am a UVic student" />
                </v-flex>
                <v-flex mx-4 v-if="signUpForm.isUvicStudent">
                  <v-text-field
                    v-model="signUpForm.studentNumber"
                    :rules="studentNumberRules"
                    validate-on-blur
                    v-mask="'V########'"
                    label="Student Number"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-subheader class="mt-2">Emergency Contact Information</v-subheader>
              <EmergencyContact />
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-subheader>
                    If you have any medical conditions you think we should know about, please list them
                    below.
                  </v-subheader>
                  <v-textarea rows="2" v-model="signUpForm.medicalConditions"></v-textarea>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-text-field
                    type="password"
                    validate-on-blur
                    :rules="passwordRules"
                    label="Create Password"
                    v-model="signUpForm.password"
                    prepend-icon="lock"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap mb-4>
                <v-flex mx-4>
                  <v-text-field
                    type="password"
                    label="Confirm Password"
                    :rules="[checkPasswordConfirm]"
                    validate-on-blur
                    v-model="signUpForm.passwordConfirm"
                    prepend-icon="lock"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-btn class="primary" large block @click="submitForm">Sign Up</v-btn>
              </v-layout>
              <div>{{errorMessage}}</div>
            </v-form>
          </v-card-text>
          <v-overlay :value="isLoading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </v-card>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import { mapState } from "vuex";
import EmergencyContact from "@/components/EmergencyContact.vue";
import { app } from "@/firebase.ts";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
export default {
  components: {
    EmergencyContact
  },
  data: () => ({
    isLoading: false,
    signUpForm: {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthDate: "",
      isUvicStudent: false,
      studentNumber: "",
      medicalConditions: "",
      password: "",
      passwordConfirm: ""
    },
    requiredFieldRules: [v => !!v || "This field is required"],
    emailRules: [
      v => !!v || "This field is required",
      v =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Email is icorrectly formatted"
    ],
    studentNumberRules: [
      v => !!v || "This field is required",
      v => /([V]\d{8})/.test(v) || "Student number is incorrectly formatted"
    ],
    birthdateRules: [
      v => !!v || "This field is required",
      v => /\d{4}\/\d{2}\/\d{2}/.test(v) || "Date is incorrectly formatted"
    ],
    passwordRules: [
      v =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(v) ||
        "Password must be between 6 and 20 characters containing at least one uppercase letter and one digit"
    ],
    passwordConfirmRules: [
      v => !!v || "Please confirm your password",
      v => v === password || "Passwords do not match"
    ],
    phoneNumberRules: [
      v => !!v || "This field is required",
      v => v.length === 17 || "Phone number is incorrectly formatted"
    ],
    errorMessage: "",
    userId: ""
  }),
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.signUpForm.email,
            this.signUpForm.password
          )
          .then(res => {
            // Store user in DB
            delete this.signUpForm.password;
            delete this.signUpForm.passwordConfirm;
            this.signUpForm.userId = res.user.uid;
            res.user.updateProfile({
              displayName: this.signUpForm.firstName,
              email: this.signUpForm.email
            });
            firebase
              .firestore()
              .collection("users")
              .add({
                firstName: this.signUpForm.firstName,
                lastName: this.signUpForm.lastName,
                email: this.signUpForm.email,
                phoneNumber: this.signUpForm.phoneNumber,
                birthdate: this.signUpForm.birthdate,
                isUvicStudent: this.signUpForm.isUvicStudent,
                studentNumber: this.signUpForm.studentNumber,
                emergencyContact: {
                  firstName: this.$store.getters["EmergencyContact/firstName"],
                  lastName: this.$store.getters["EmergencyContact/lastName"],
                  relation: this.$store.getters["EmergencyContact/relation"],
                  phoneNumber: this.$store.getters[
                    "EmergencyContact/phoneNumber"
                  ]
                },
                medicalConditions: this.signUpForm.medicalConditions
              });
            res.user
              .sendEmailVerification()
              .then(() => {
                console.log("Email sent to new user");
              })
              .catch(err => {
                console.error(err.message);
              });
            console.log(
              "User",
              this.signUpForm.firstName,
              this.signUpForm.lastName,
              "signed up successfully"
            );
            this.$store.dispatch("EmergencyContact/destroy");
            this.isLoading = false;
            this.$router.push({ path: "/" });
          })
          .catch(err => {
            console.error(err); // TODO: Enable error message on form if email already in
            if (err.code === "auth/email-already-in-use") {
              const badEmail = this.signUpForm.email;
              this.emailRules = [
                v => v !== badEmail || "This email is already in use",
                v => !!v || "This field is required",
                v =>
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    v
                  ) || "Email is icorrectly formatted"
              ];
            }
            this.isLoading = false;
          });
      }
    },
    checkPasswordConfirm(value) {
      if (value.length === 0) {
        return "Please confirm your password";
      } else if (value !== this.signUpForm.password) {
        return "Passwords do not match";
      } else {
        return true;
      }
    }
  }
};
</script>