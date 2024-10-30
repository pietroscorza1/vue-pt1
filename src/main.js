// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes'; // Importa el router desde routes.js
import './style.css';

const app = createApp(App);

app.use(router); // Usa el router
app.mount('#app');
