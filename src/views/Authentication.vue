<template>
  <v-container fluid mt-4>
    <v-layout v-if="formType === 'signUp'">
      <SignUpForm />
    </v-layout>
    <v-layout v-if="formType === 'logIn'">
      <LogInForm />
    </v-layout>
  </v-container>
</template>
  
  
<script>
import Vue from "vue";
import SignUpForm from "@/components/SignUpForm.vue";
import LogInForm from "@/components/LogInForm.vue";

export default {
  components: {
    SignUpForm,
    LogInForm
  },
  computed: {
    formType: {
      get() {
        return this.$store.getters["App/formType"];
      }
    },
  },
};
</script>
  