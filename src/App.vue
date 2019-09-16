<template>
  <v-app>
    <v-app-bar app>
      <v-icon/>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">UVic </span>
        <span>Photography Excursion Club</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="mr-2">Trips</span>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
});
</script>
