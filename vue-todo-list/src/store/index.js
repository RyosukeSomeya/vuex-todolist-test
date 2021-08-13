import Vue from 'vue';
import Vuex from 'vuex';

Vue.user(Vuex);

export default new Vuex.Store({
    state: {
        showState: 'all',
        todos: [],
    }
})
