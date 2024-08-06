const path = require('path');
const { createVuePlugin } = require('vite-plugin-vue2');
const autoprefixer = require('autoprefixer');

module.exports = {

  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
};
