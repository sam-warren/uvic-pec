<template>
  <v-container fluid mt-4>
    <v-layout>
      <SignUpForm />
    </v-layout>
  </v-container>
</template>
  
  
<script>
import Vue from "vue";
import SignUpForm from "@/components/forms/SignUpForm.vue";

export default {
  components: {
    SignUpForm,
  },
};
</script>
  