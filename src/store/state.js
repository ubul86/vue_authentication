export default {
    isAuthenticated: false,
    user: JSON.parse(localStorage.getItem('user')) || null,
};
