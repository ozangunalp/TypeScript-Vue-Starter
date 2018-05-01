<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{souscripteurName}}{{exclamationMarks}}</div>
        <button @click="decrementCounters">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { QuestionSetState } from '../store/modules/questionset';
import { CounterMutation, CounterState } from '../store/modules/counter';

@Component
export default class HelloDecorator extends Vue {
  @QuestionSetState nameSouscripteur!: string;

  @CounterState count!: number;

  @CounterMutation increment!: () => void;

  @CounterMutation decrement!: () => void;

  @CounterMutation decrementCountIncrement!: () => void;

  get exclamationMarks(): string {
    return Array(this.count + 1).join('!');
  }

  get souscripteurName(): string {
    return this.nameSouscripteur;
  }

  decrementCounters() {
    this.decrement();
    this.decrementCountIncrement();
  }
}
</script>

<style scoped lang="less">
.greeting {
  font-size: 20px;
}
</style>
