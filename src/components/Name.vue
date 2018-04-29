<template>
    <div>
        <input v-model=sourcipteurName type="text">
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {QuestionSetMutation, QuestionSetState} from "../store/modules/questionset";

  @Component
  export default class Name extends Vue {

    @QuestionSetState
    nameSouscripteur!: string;

    @QuestionSetMutation('updateNameSouscripteur')
    updateName!: (name: string) => void;

    get sourcipteurName(): string {
      return this.nameSouscripteur;
    }

    set sourcipteurName(name: string) {
      this.updateName(name);
    }
  }
</script>