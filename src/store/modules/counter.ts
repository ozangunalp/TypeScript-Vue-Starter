import Counter from "../../types/Counter";
import RootState from "../../types/RootState";
import {Module, MutationTree} from "vuex";

export const state : Counter = {
  count: 1,
};

export const mutations :MutationTree<Counter> = {
  increment(state: Counter) {
    if (state.count >= 1) {
      state.count++
    }
  },
  decrement(state: Counter) {
    if (state.count > 1) {
      state.count--
    }
  }
};

export const counter : Module<Counter, RootState> = {
  namespaced: true,
  state,
  mutations
};

export default counter;