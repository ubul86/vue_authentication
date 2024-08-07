<!-- components/Header.vue -->
<template>
  <v-app-bar app>
    <v-toolbar-title>My App</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="!isAuthenticated">
      <v-btn @click="showLoginPopup">Login</v-btn>
    </div>
    <div v-else>
      <v-btn @click="logout">Logout</v-btn>
    </div>
    <LoginPopup ref="loginPopup" />
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import LoginPopup from './LoginPopup.vue';

export default {
  components: { LoginPopup },
  computed: {
    ...mapState(['isAuthenticated']),
  },
  methods: {
    ...mapActions(['logout']),
    showLoginPopup() {
      this.$refs.loginPopup.dialog = true;
    },
  },
};
</script>
