import { Module, MutationTree } from 'vuex';
import { Getter, Mutation, namespace, State } from 'vuex-class';

import Counter from '../../types/Counter';
import RootState from '../../types/RootState';

const namespaceName = 'counter';

export const CounterMutation = namespace(namespaceName, Mutation);
export const CounterState = namespace(namespaceName, State);
export const CounterGetter = namespace(namespaceName, Getter);

export const counterState: Counter = {
  count: 1,
  decrementCount: 0,
};

export const mutations: MutationTree<Counter> = {
  increment(state: Counter) {
    if (state.count >= 1) {
      state.count++;
    }
  },
  decrement(state: Counter) {
    if (state.count > 1) {
      state.count--;
    }
  },
  decrementCountIncrement(state: Counter) {
    state.decrementCount++;
  },
};

export const counterModule: Module<Counter, RootState> = {
  namespaced: true,
  state: counterState,
  mutations,
};

export default counterModule;
