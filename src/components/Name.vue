<template>
    <div>
        <input v-model=sourcipteurName type="text">
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Mutation, State} from "vuex-class";

  @Component
  export default class Name extends Vue {

    @State('nameSouscripteur', {namespace: 'questionset'})
    nameSouscripteur!: string;

    @Mutation('updateNameSouscripteur', {namespace: 'questionset'})
    updateName: any;

    get sourcipteurName(): string {
      return this.nameSouscripteur;
    }

    set sourcipteurName(name: string) {
      this.updateName(name);
    }
  }
</script>