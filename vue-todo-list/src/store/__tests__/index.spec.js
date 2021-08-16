import Vuex from 'vuex';
import { cloneDeep } from 'lodash'
import actions from '~/store/actions.js'
import mutations from '~/store/mutations.js'
import { createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);
