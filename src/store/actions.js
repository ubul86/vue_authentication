import AuthService from '../services/auth.service';

export default {
    async login({ commit }, user) {
        try {
            const data = await AuthService.login(user);
            commit('setUser', data);
        } catch (error) {
            console.error(error);
        }
    },
    logout({ commit }) {
        AuthService.logout();
        commit('setUser', null);
    },
    async register({ commit }, user) {
        try {
            await AuthService.register(user);
        } catch (error) {
            console.error(error);
        }
    },
};
