<template>
    <div>
        <input v-model=sourcipteurName type="text">
        <span>Clicked {{decrementCount}} times on "-"</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CounterState } from '../store/modules/counter'
import { QuestionSetMutation, QuestionSetState } from '../store/modules/questionset'

@Component
export default class Name extends Vue {
  @CounterState decrementCount!: number

  @QuestionSetState nameSouscripteur!: string

  @QuestionSetMutation('updateNameSouscripteur') updateName!: (name: string) => void

  get sourcipteurName(): string {
    return this.nameSouscripteur
  }

  set sourcipteurName(name: string) {
    this.updateName(name)
  }
}
</script>
