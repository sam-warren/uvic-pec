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
                  <v-text-field label="First Name" validate-on-blur v-model="firstName" :rules="requiredFieldRules"
                    prepend-icon="person"></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field label="Last Name" validate-on-blur :rules="requiredFieldRules" v-model="lastName">
                  </v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field type="email" label="Email" :rules="emailRules" v-model="email" prepend-icon="email"
                    validate-on-blur></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-text-field v-model="phoneNumber" type="tel" v-mask="'+1 (###) ### ####'" label="Phone Number"
                    :rules="requiredFieldRules" prepend-icon="phone" validate-on-blur name="phoneNumber"></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field type="text" label="Birthdate (YYYY/MM/DD)" prepend-icon="event" :rules="birthdateRules"
                    v-model="birthdate" validate-on-blur v-mask="'####/##/##'"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap mb-2>
                <v-flex mx-4>
                  <v-checkbox v-model="isUvicStudent" label="I am a UVic student" />
                </v-flex>
                <v-flex mx-4 v-if="isUvicStudent">
                  <v-text-field v-model="studentNumber" :rules="studentNumberRules" validate-on-blur
                    v-mask="'V########'" label="Student Number"></v-text-field>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-subheader class="mt-2">Emergency Contact Information</v-subheader>
              <EmergencyContact />
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-subheader>If you have any medical conditions you think we should know about, please list them
                    below.
                  </v-subheader>
                  <v-textarea rows="2" v-model="medicalConditions"></v-textarea>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-text-field type="password" validate-on-blur :rules="passwordRules" validate-on-blur
                    label="Create Password" v-model="password" prepend-icon="lock"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap mb-4>
                <v-flex mx-4>
                  <v-text-field type="password" label="Confirm Password" :rules="[checkPasswordConfirm]"
                    validate-on-blur v-model="passwordConfirm" prepend-icon="lock">
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-btn class="primary" large block @click="submitForm">Sign Up</v-btn>
              </v-layout>
              <div>{{errorMessage}}</div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
  import { mapState } from "vuex";
  import EmergencyContact from "@/components/EmergencyContact.vue";
  import firebase from "firebase/app";
  import "firebase/firestore";
  export default {
    components: {
      EmergencyContact,
    },
    data: () => ({
      requiredFieldRules: [
        (v) => !!v || "This field is required"
      ],
      emailRules: [
        (v) => !!v || "This field is required",
        (v) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || "Email is icorrectly formatted",
      ],
      studentNumberRules: [
        (v) => !!v || "This field is required",
        (v) => /([V]\d{8})/.test(v) || "Student number is incorrectly formatted",
      ],
      birthdateRules: [
        (v) => !!v || "This field is required",
        (v) => /\d{4}\/\d{2}\/\d{2}/.test(v) || "Date is incorrectly formatted",
      ],
      passwordRules: [
        (v) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(v) || "Password must be between 6 and 20 characters containing at least one uppercase letter and one digit"
      ],
      passwordConfirmRules: [
        (v) => !!v || "Please confirm your password",
        (v) => v === password || "Passwords do not match"
      ],
      password: "",
      passwordConfirm: "",
      errorMessage: "",
      userId: "",
    }),
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(
              this.email,
              this.password
            )
            .then((res) => {
              // Store user in DB
              delete this.password;
              delete this.passwordConfirm;
              this.userId = res.user.uid;
              res.user.updateProfile({
                displayName: this.firstName,
                email: this.email
              });
              firebase
                .firestore()
                .collection("users")
                .add({
                  firstName: this.firstName,
                  lastName: this.lastName,
                  email: this.email,
                  phoneNumber: this.phoneNumber,
                  birthdate: this.birthdate,
                  isUvicStudent: this.isUvicStudent,
                  studentNumber: this.studentNumber,
                  emergencyContact: {
                    firstName: this.$store.getters["EmergencyContact/firstName"],
                    lastName: this.$store.getters["EmergencyContact/lastName"],
                    relation: this.$store.getters["EmergencyContact/relation"],
                    phoneNumber: this.$store.getters["EmergencyContact/phoneNumber"],
                  },
                  medicalConditions: this.medicalConditions,
                });
              res.user
                .sendEmailVerification()
                .then(() => {
                  console.log("Email sent to new user.");
                })
                .catch((err) => {
                  console.error(err.message);
                });
              console.log(
                "User",
                this.firstName,
                this.lastName,
                "signed up successfully"
              );
              this.$router.push({ path: "/" });
            })
            .catch((err) => {
              console.error(err.message);
            });
        }
      },
      checkPasswordConfirm(value) {
        if (value.length === 0) {
          return "Please confirm your password";
        } else if (value !== this.password) {
          return "Passwords do not match";
        } else {
          return true;
        }
      },
    },
    computed: {
      ...mapState({
        ClubSignUpForm: (state) => state.ClubSignUpForm,
      }),
      firstName: {
        get() {
          return this.$store.getters["ClubSignUpForm/firstName"];
        },
        set(value) {
          this.$store.dispatch("ClubSignUpForm/firstName", value);
        },
      },
      lastName: {
        get() {
          return this.$store.getters["ClubSignUpForm/lastName"];
        },
        set(value) {
          this.$store.dispatch("ClubSignUpForm/lastName", value);
        },
      },
      email: {
        get() {
          return this.$store.getters["ClubSignUpForm/email"];
        },
        set(value) {
          this.$store.dispatch("ClubSignUpForm/email", value);
        },
      },
      phoneNumber: {
        get() {
          return this.$store.getters["ClubSignUpForm/phoneNumber"];
        },
        set(value) {
          this.$store.dispatch("ClubSignUpForm/phoneNumber", value);
        },
      },
      birthdate: {
        // getter
        get() {
          return this.$store.getters["ClubSignUpForm/birthdate"];
        },
        // setter
        set(value) {
          this.$store.dispatch("ClubSignUpForm/birthdate", value);
        },
      },
      isUvicStudent: {
        get() {
          return this.$store.getters["ClubSignUpForm/isUvicStudent"];
        },
        set(value) {
          if (!value) {
            this.$store.dispatch("ClubSignUpForm/studentNumber", "");
          }
          this.$store.dispatch("ClubSignUpForm/isUvicStudent", value);
        },
      },
      studentNumber: {
        get() {
          return this.$store.getters["ClubSignUpForm/studentNumber"];
        },
        set(value) {
          this.$store.dispatch("ClubSignUpForm/studentNumber", value);
        },
      },
      medicalConditions: {
        get() {
          return this.$store.getters["ClubSignUpForm/medicalConditions"];
        },
        set(value) {
          this.$store.dispatch("ClubSignUpForm/medicalConditions", value);
        },
      },
    },
  };
</script>