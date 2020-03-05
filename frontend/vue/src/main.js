import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Contest from "./Contest";
import Home from "./Home";
import Play from "./Play";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import New from "./New";

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/contest',
      name: 'contest',
      component: Contest
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/play/:id', name:'play', component: Play },
    { path: '/new', name:'new', component: New }
  ]
});

console.log("ESTAA");
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
