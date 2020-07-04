import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Depot from '../components/Depot.vue';
import Withdraw from '../components/Withdraw.vue';
import History from '../components/History.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/depot',
    name: 'Depot',
    component: Depot,
  },
  {
    path: '/withdraw',
    name: 'Retrait',
    component: Withdraw,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
