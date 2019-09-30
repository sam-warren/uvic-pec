<template>
  <v-container>
    <v-layout row wrap>
      <v-flex mx-4>
        <v-text-field
          label="First Name"
          :rules="requiredFieldRules"
          prepend-icon="person"
          v-model="firstName"
        ></v-text-field>
      </v-flex>
      <v-flex mx-4>
        <v-text-field label="Last Name" :rules="requiredFieldRules" v-model="lastName"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex mx-4>
        <v-text-field
          label="Relation"
          :rules="requiredFieldRules"
          prepend-icon="people"
          v-model="relation"
        ></v-text-field>
      </v-flex>
      <v-flex mx-4>
        <v-text-field
          label="Phone Number"
          prepend-icon="phone"
          :rules="phoneNumberRules"
          v-mask="'+1 (###) ### ####'"
          v-model="phoneNumber"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    requiredFieldRules: [v => !!v || "This field is required"],
    phoneNumberRules: [
      v => !!v || "This field is required",
      v => v.length === 17 || "Phone number is incorrectly formatted"
    ]
  }),
  computed: {
    ...mapState({
      ClubSignUpForm: state => state.ClubSignUpForm
    }),
    firstName: {
      get() {
        return this.$store.getters["EmergencyContact/firstName"];
      },
      set(value) {
        this.$store.dispatch("EmergencyContact/firstName", value);
      }
    },
    lastName: {
      get() {
        return this.$store.getters["EmergencyContact/lastName"];
      },
      set(value) {
        this.$store.dispatch("EmergencyContact/lastName", value);
      }
    },
    relation: {
      get() {
        return this.$store.getters["EmergencyContact/relation"];
      },
      set(value) {
        this.$store.dispatch("EmergencyContact/relation", value);
      }
    },
    phoneNumber: {
      get() {
        return this.$store.getters["EmergencyContact/phoneNumber"];
      },
      set(value) {
        this.$store.dispatch("EmergencyContact/phoneNumber", value);
      }
    }
  }
};
</script>