<template>
  <v-container fluid mt-4>
    <v-layout>
      <SignUpForm/>
    </v-layout>
  </v-container>
</template>
  
  
  <script lang="ts">
import Vue from "vue";
import SignUpForm from "@/components/SignUpForm.vue";
import LogInForm from "@/components/LogInForm.vue";

export default Vue.extend({
  components: {
    SignUpForm,
    LogInForm,
  },
});
</script>
  