import { Module, MutationTree } from 'vuex';
import { Mutation, namespace, State } from 'vuex-class';

import QuestionSet from '../../types/QuestionSet';
import RootState from '../../types/RootState';

const namespaceName = 'questionset';

export const QuestionSetMutation = namespace(namespaceName, Mutation);
export const QuestionSetState = namespace(namespaceName, State);

export const mutations: MutationTree<QuestionSet> = {
  updateNameSouscripteur(state: QuestionSet, name: string) {
    state.nameSouscripteur = name;
  },
};

export const questionSetState: QuestionSet = {
  acceptSwitching: undefined,
  nameSouscripteur: 'World',
  surnameSouscripteur: undefined,
};

export const questionsetModule: Module<QuestionSet, RootState> = {
  namespaced: true,
  state: questionSetState,
  mutations,
};

export default questionsetModule;
