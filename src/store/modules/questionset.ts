import QuestionSet from "../../types/QuestionSet";
import {Module, MutationTree} from "vuex";
import RootState from "../../types/RootState";

export const state : QuestionSet = {
  acceptSwitching: undefined,
  nameSouscripteur: "World",
  surnameSouscripteur: undefined
};

export const mutations : MutationTree<QuestionSet> = {
  updateNameSouscripteur(state: QuestionSet, name: string) {
    state.nameSouscripteur = name;
  }
};

export const questionset : Module<QuestionSet, RootState> = {
  namespaced: true,
  state,
  mutations
};

export default questionset;