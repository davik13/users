import Vue from 'vue';
import VueRouter from 'vue-router';
import ListUsers from '@/views/ListUsers.vue';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import about from '../components/about.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list-users',
    name: 'ListUsers',
    component: ListUsers,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },

];

const router = new VueRouter({
  mode: 'history',
  routes,

});

export default router;
