import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import counter from "./modules/counter";
import questionset from "./modules/questionset";
import RootState from "../types/RootState";

Vue.use(Vuex);

export default new Vuex.Store<RootState>(<StoreOptions<RootState>> {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    counter,
    questionset
  }
});