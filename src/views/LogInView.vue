<template>
  <v-container fluid mt-4>
    <v-layout>
      <LogInForm/>
    </v-layout>
  </v-container>
</template>
<script>
import Vue from "vue";
import LogInForm from "@/components/forms/LogInForm";
export default {
  components: {
    LogInForm
  }
};
</script>
  