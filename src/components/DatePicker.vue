<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field v-model="date" label="Birthdate" prepend-icon="event" readonly v-on="on"></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <div class="flex-grow-1"></div>
      <v-btn text color="primary" @click="menu = false">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  data: () => ({
    menu: false,
  }),
  computed: {
    date: {
      // getter
      get() {
        return this.$store.getters["ClubSignUpForm/birthdate"];
      },
      // setter
      set(value) {
        this.$store.dispatch("ClubSignUpForm/birthdate", value);
      },
    },
  },
};
</script>