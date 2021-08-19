import Vue from 'vue';
import Vuex from 'vuex' // ★追加
Vue.use(Vuex) // ★追加

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
