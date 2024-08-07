export default {
    setUser(state, user) {
        state.isAuthenticated = true;
        state.user = user;
    },
    logout(state) {
        state.isAuthenticated = false;
        state.user = null;
    },
};
