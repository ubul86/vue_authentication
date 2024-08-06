<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Your content here -->
        <login-popup v-if="showLoginPopup" @close="showLoginPopup = false"></login-popup>
        <!-- Other components or elements -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LoginPopup from './components/Login.vue';

export default {
  components: {
    LoginPopup
  },
  data() {
    return {
      showLoginPopup: true,
    };
  },
};
</script>

<style>
/* Add your global styles here */
</style>
