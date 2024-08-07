<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>My Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!isAuthenticated" @click="showLoginPopup = true">Login</v-btn>
      <v-btn v-else @click="logout">Logout</v-btn>
    </v-app-bar>

    <v-dialog v-model="showLoginPopup" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="showLoginPopup = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="user.username" label="Username" required></v-text-field>
            <v-text-field v-model="user.password" label="Password" type="password" required></v-text-field>
            <v-card-actions>
              <v-btn color="primary" type="submit">Login</v-btn>
              <v-btn @click="showLoginPopup = false">Cancel</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      showLoginPopup: false,
      user: {
        username: '',
        password: ''
      }
    };
  },
  computed: {
    ...mapState(['isAuthenticated'])
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', this.user);
        this.showLoginPopup = false;
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  }
};
</script>
