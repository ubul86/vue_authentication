export default {
    setUser(state, user) {
        state.isAuthenticated = true;
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state) {
        state.isAuthenticated = false;
        state.user = null;
        localStorage.removeItem('user');
    },
};