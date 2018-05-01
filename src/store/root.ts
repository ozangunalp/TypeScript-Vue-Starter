import Vue from 'vue';
import Vuex from 'vuex';

import RootState from '../types/RootState';
import counter from './modules/counter';
import questionset from './modules/questionset';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    counter,
    questionset,
  },
});
