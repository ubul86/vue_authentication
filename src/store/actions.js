import AuthService from '@/services/auth.service';

export default {
    async login({ commit }, user) {
        try {
            const response = await AuthService.login(user);
            commit('login', response.user); // Adjust based on the actual response structure
            return response.user;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    },
    async logout({ commit }) {
        try {
            await AuthService.logout();
            commit('logout');
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
    }
};