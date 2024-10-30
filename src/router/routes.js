// src/router/routes.js

import { createRouter, createWebHistory } from 'vue-router';
import Axios from '../views/Axios.vue';
import Calculadora from '../views/Calculadora.vue';
import Fetch from '../views/Fetch.vue';
import Home from '../views/Home.vue';


const routes = [
  {
    path: '/', // Ruta principal
    name: 'Home',
    component: Home, // Componente que se mostrará
  },
  {
    path: '/calculadora',
    name: 'Calculadora',
    component: Calculadora,
  },
  {
    path: '/fetch',
    name: 'Fetch',
    component: Fetch,
  },
  {
    path: '/axios',
    name: 'Axios',
    component: Axios,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // Rutas configuradas
});

export default router;
