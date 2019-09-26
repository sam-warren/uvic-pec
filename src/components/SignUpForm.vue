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
                  <v-text-field label="First Name" v-model="firstName" :rules="requiredFieldRules" prepend-icon="person"></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field label="Last Name" :rules="requiredFieldRules" v-model="lastName"></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field type="email" label="Email" :rules="requiredFieldRules" v-model="email" prepend-icon="email"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-text-field 
                    v-model="phoneNumber" 
                    type="tel"
                    v-mask="'+1 (###) ### ####'"
                    label="Phone Number"
                    :rules="requiredFieldRules"
                    prepend-icon="phone"
                    name="phoneNumber"
                  ></v-text-field>
                </v-flex>
                <v-flex mx-4>
                  <v-text-field type="text" label="Birthdate (YYYY/MM/DD)" prepend-icon="event" :rules="requiredFieldRules" v-model="birthdate" v-mask="'####/##/##'"></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex mx-4>
                  <v-checkbox v-model="isUvicStudent" label="I am a UVic student" />
                </v-flex>
                <v-flex mx-4 v-if="isUvicStudent">
                  <v-text-field v-model="studentNumber" :rules="requiredFieldRules" v-mask="'V########'" label="Student Number"></v-text-field>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-layout row wrap>
                <v-flex mx-4 mt-4>
                  <v-subheader>If you have any medical conditions you think we should know about, please list them below.</v-subheader>
                  <v-textarea rows="2" v-model="medicalConditions"></v-textarea>
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
export default {
  data: () => ({
    requiredFieldRules: [
      (v) => !!v || "This field is required"
    ]
  }),
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