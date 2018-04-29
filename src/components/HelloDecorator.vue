<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{souscripteurName}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {Mutation, State} from "vuex-class";

  @Component
  export default class HelloDecorator extends Vue {

    @State('nameSouscripteur', {namespace: 'questionset'})
    nameSouscripteur!: string;

    @State('count', {namespace: 'counter'})
    count!: number;

    @Mutation('increment', {namespace: 'counter'})
    increment!: () => void;

    @Mutation('decrement', {namespace: 'counter'})
    decrement!: () => void;

    get exclamationMarks(): string {
      return Array(this.count + 1).join('!');
    }

    get souscripteurName(): string {
      return this.nameSouscripteur;
    }

  }
</script>

<style scoped lang="less">
    .greeting {
        font-size: 20px;
    }
</style>
