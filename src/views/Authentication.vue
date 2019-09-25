<template>
  <v-content>
    <v-container>
      <v-layout>
        <SignUpForm />
      </v-layout>
    </v-container>
  </v-content>
</template>
  
  
  <script lang="ts">
import Vue from "vue";
import SignUpForm from "@/components/SignUpForm.vue";

export default Vue.extend({
  components: {
    SignUpForm,
  },
});
</script>
  