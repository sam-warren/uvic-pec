<template>
  <v-container fluid mt-4>
    <v-layout>
      <ForgotPasswordForm/>
    </v-layout>
  </v-container>
</template>
<script>
import Vue from "vue";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
export default {
  components: {
    ForgotPasswordForm
  }
};
</script>
  