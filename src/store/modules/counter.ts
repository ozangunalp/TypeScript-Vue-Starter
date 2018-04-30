import Counter from "../../types/Counter";
import RootState from "../../types/RootState";
import {Module, MutationTree} from "vuex";
import {Getter, Mutation, namespace, State} from "vuex-class";

export const CounterMutation = namespace('counter', Mutation);
export const CounterState = namespace('counter', State);
export const CounterGetter = namespace('counter', Getter);

export const state : Counter = {
  count: 1,
  decrementCount: 0
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
  },
  decrementCountIncrement(state: Counter) {
    state.decrementCount++
  }
};

export const counter : Module<Counter, RootState> = {
  namespaced: true,
  state,
  mutations
};

export default counter;