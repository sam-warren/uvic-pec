<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-card>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Sign Up</v-toolbar-title>
          </v-toolbar>
          <v-subheader class="mt-2">Signing up for UVic PEC allows you to register for trips.</v-subheader>
          <v-card-text>
            <v-form>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-text-field label="First Name" v-model="firstName" prepend-icon="person"></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field label="Last Name" v-model="lastName"></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field type="email" label="Email" v-model="email" prepend-icon="email"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-text-field
                    type="tel"
                    label="Phone Number"
                    v-model="phoneNumber"
                    :mask="'(###) ### ####'"
                    prepend-icon="phone"
                  ></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <DatePicker />
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-checkbox v-model="isUvicStudent" label="I am a UVic student" />
                </v-flex>
                <v-flex mx-4 v-if="isUvicStudent">
                  <v-text-field v-model="studentNumber" label="Student Number"></v-text-field>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-layout row wrap>
                <v-flex mx-4 mt-4>
                  <v-subheader>If you have any medical conditions you think we should know about, please list them below.</v-subheader>
                  <v-textarea rows="1" v-model="medicalConditions"></v-textarea>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
import { mapState } from "vuex";
import DatePicker from "./DatePicker";
export default {
  components: {
    DatePicker,
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