<template>
  <v-app>
    <Header />
    <v-main>
      <v-container></v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
@import 'vuetify/dist/vuetify.min.css';
</style>