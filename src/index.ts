import Vue from 'vue';
import HelloComponent from './components/Hello.vue';
import HelloDecoratorComponent from './components/HelloDecorator.vue';
import NameComponent from './components/Name.vue';
import store from './store/root';
// import 'es6-promise/auto'

const v = new Vue({
  el: '#app',
  store,
  template: `
    <div>
        <h1>Name</h1>
        <name-component />
        <h1>Hello Component</h1>
        <hello-component :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :initialEnthusiasm="5" />
        </div>
    `,
  components: {
    NameComponent,
    HelloComponent,
    HelloDecoratorComponent,
  },
});
